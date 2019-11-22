import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import Context from '../context';
import { GraphQLClient } from 'graphql-request';
import List from '../components/list';

const client = new GraphQLClient('http://localhost:9999/graphql', {
  headers: { 'Content-Type': 'application/json' }
})
const LIST_QUERY = `
  {
    list {
      key
      name
      picture
    }
  }
`;


const ListWrapper = () => {
  const { dispatch } = useContext(Context);
  const fetchList = async () => {
    try {
      const { list } = await client.request(LIST_QUERY);
      // dispatch({ type: 'LOAD_LIST', payload: list });
      const listChunked = await _.chunk(list, 6);
      dispatch({ type: 'CHUNKED_LIST', payload: listChunked });
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <>
      <List />
    </>
  )
}

export default ListWrapper;
