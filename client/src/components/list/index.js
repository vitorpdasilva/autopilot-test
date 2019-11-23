import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import Item from '../item';
import ListStyled from './style';

const List = ({ onBottom }) => {
  const { state } = useContext(Context)
  const { visibleList } = state;
  useEffect(() => {
    document.addEventListener('scroll', trackScroll())
  }, []);
  const trackScroll = async (e) => {
    
    if (e) {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        onBottom()
      }
    }
  }

  return (
    <ListStyled onScroll={trackScroll}>
      {!visibleList ? 'Loading...' : (visibleList.map(i => (
        <Item key={i.key} data={i}></Item>
      )))}
    </ListStyled>
  );
}

export default List;
