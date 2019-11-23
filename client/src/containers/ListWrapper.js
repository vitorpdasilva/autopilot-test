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
  const { dispatch, state } = useContext(Context);
  const { chunkIndex, visibleList, itemList, chunkedList } = state;
  const itemsPerLoad = 6; // 6 is the number of items visible on the png sent
  const fetchList = async () => {
    console.log('fetch')
    try {
      const { list } = await client.request(LIST_QUERY);
      dispatch({ type: 'LOAD_LIST', payload: list });
      
      const chunkList = _.chunk(list, itemsPerLoad);
      dispatch({ type: 'CHUNKED_LIST', payload: chunkList })
      
      dispatch({ type: 'VISIBLE_LIST', payload: chunkList[chunkIndex] });
    } catch (err) {
      console.log(err)
    }
  }
  
  const loadMore = () => {
    setTimeout(() => { // simulating delay on request
      if (chunkIndex >= chunkedList.length -1 ) return;
      dispatch({ type: 'INCREMENT_CHUNK_INDEX', payload: chunkIndex + 1 })
      const concatList = _.concat(visibleList, chunkedList[chunkIndex + 1])
      dispatch({ type: 'VISIBLE_LIST', payload: concatList }); 
    }, 500)
  }

  useEffect(() => {
    fetchList();
  }, [])
  return (
    <>
      <List onBottom={() => loadMore()} />
    </>
  )
}

export default ListWrapper;
