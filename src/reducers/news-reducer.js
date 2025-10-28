const inintialNewsState = [];

export const newsReducer = (state = inintialNewsState, action) => {
  switch (action.type) {
    case "POST_NEWS":
      return [...action.payload];

    default:
      return state;
  }
};
