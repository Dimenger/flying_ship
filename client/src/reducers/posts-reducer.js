const inintialPostsState = [];

export const postsReducer = (state = inintialPostsState, action) => {
  switch (action.type) {
    case "POST_POSTS":
      return [...action.payload];

    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.payload);

    case "ADD_NEW_POST":
      return [...state, action.payload];

    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

    default:
      return state;
  }
};
