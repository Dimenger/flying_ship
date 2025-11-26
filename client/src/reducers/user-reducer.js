const initialUserState = {
  id: "",
  surname: "",
  name: "",
  phone: "",
  email: "",
  role: "",
  registered_at: "",
  services: [],
  isLoading: false,
  failure: null,
  success: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { ...state, isLoading: true, failure: null };

    case "GET_USER_SUCCESS":
      return {
        ...state,
        ...action.payload.user,
        success: action.payload.success,
        isLoading: false,
        failure: null,
      };

    case "LOGOUT_USER_SUCCESS":
      return initialUserState;

    case "GET_USER_SERVICES_SUCCESS":
      return {
        ...state,
        services: action.payload,
        isLoading: false,
        failure: null,
      };

    case "ADD_SERVICE_TO_USER_SUCCESS":
      return {
        ...state,
        services: [...state.services, action.payload],
        isLoading: false,
        failure: null,
      };

    case "USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
