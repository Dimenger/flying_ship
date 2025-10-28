const inintialNewsState = {
  news: [],
};

export const newsReducer = (state = inintialNewsState, action) => {
  switch (action.type) {
    case "POST_NEWS":
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
