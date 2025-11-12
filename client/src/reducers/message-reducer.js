const inintialMessageState = {
  success: null,
  message: "",
};

export const messageReducer = (state = inintialMessageState, action) => {
  switch (action.type) {
    case "GET_ERROR":
      return { ...state, ...action.payload };

    case "GET_SUCCESS_MESSAGE":
      return { ...state, ...action.payload };

    case "ERASE_MESSAGE":
      return { ...state, success: null, message: "" };

    default:
      return state;
  }
};
