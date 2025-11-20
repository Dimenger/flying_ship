const initialServiceState = {
  id: "",
  serId: "",
  title: "",
  subtitle: "",
  prices: [],
  description: "",
  aims: [],
  isLoading: false,
  failure: null,
};
export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case "POST_SERVICE_REQUEST":
      return { ...state, isLoading: true, failure: null };
    case "POST_SERVICE_SUCCESS": {
      const { _id, ...rest } = action.payload;
      return { ...state, ...rest, id: _id, isLoading: false, failure: null };
    }
    case "POST_SERVICE_FAILURE":
      return { ...state, isLoading: false, failure: action.payload };

    default:
      return state;
  }
};
