import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import Context from '../../context';
import Item from '../item';
import ListStyled from './style';

const List = () => {
  const { state } = useContext(Context)
  const { chunkedList, chunkIndex } = state;
  useEffect(() => {
    document.addEventListener('scroll', trackScroll())
  }, []);
  const trackScroll = async (e) => {
    
    if (e) {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      const size = chunkedList.length;
      if (bottom) {
        console.log('bottom')
      }
    }
  }

  return (
    <ListStyled onScroll={trackScroll}>
      {!chunkedList ? 'Loading...' : (chunkedList[chunkIndex].map(i => (
        <Item key={i.key} data={i}></Item>
      )))}
    </ListStyled>
  );
}

export default List;
