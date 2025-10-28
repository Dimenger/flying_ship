const initialServiceState = {
  service: [],
};
export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case "POST_SERVICE":
      return { ...state, service: action.payload };

    default:
      return state;
  }
};
