export default function reducer(state, { type, payload }) {
  console.log('reducer', type, payload)
  switch (type) {
    case "LOAD_LIST":
      return {
        ...state,
        itemList: payload,
      }
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: payload,
      }
    case "CHUNKED_LIST":
      return {
        ...state,
        chunkedList: payload,
      }
    case "INCREMENT_CHUNK_INDEX":
      return {
        ...state,
        chunkIndex: payload,
      }
    default:
      return state;
  }
}