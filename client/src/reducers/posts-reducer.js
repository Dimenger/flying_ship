const inintialPostsState = [];

export const postsReducer = (state = inintialPostsState, action) => {
  switch (action.type) {
    case "POST_POSTS":
      return [...action.payload];

    default:
      return state;
  }
};
