const inintialErrorState = {
  error: "",
};

export const errorReducer = (state = inintialErrorState, action) => {
  switch (action.type) {
    case "GET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
