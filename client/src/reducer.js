export default function reducer(state, { type, payload }) {
  switch (type) {
    case "LOAD_LIST":
      return {
        ...state,
        itemList: payload,
      }
    case "VISIBLE_LIST":
      return {
        ...state,
        visibleList: payload,
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