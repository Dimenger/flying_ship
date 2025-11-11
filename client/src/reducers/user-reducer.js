const initialUserState = {
  id: "",
  surname: "",
  name: "",
  phone: "",
  email: "",
  role: "",
  registered_at: "",
  services: [],
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      return initialUserState;
    case "GET_USER_SERVICES":
      return { ...state, services: action.payload };
    default:
      return state;
  }
};
