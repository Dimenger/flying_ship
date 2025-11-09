const initialServiceState = {
  _id: "",
  id: "",
  title: "",
  subtitle: "",
  prices: [],
  description: "",
  aims: [],
};
export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case "POST_SERVICE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
