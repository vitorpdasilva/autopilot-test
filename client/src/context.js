import { createContext } from 'react';

const Context = createContext({
  itemList: null,
  chunkIndex: 0,
  chunkedList: null,
  visibleList: [],
});

export default Context;