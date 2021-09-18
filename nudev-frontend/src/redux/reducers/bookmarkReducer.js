const bookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.data];

    case "GET_BOOKMARKS":
      return state;

    default:
      return state;
  }
};

export default bookmarkReducer;
