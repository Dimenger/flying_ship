const initialUserState = {
  id: "",
  surname: "",
  name: "",
  phone: "",
  email: "",
  role: "",
  registered_at: "",
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, ...action.payload };
    case "REMOVE_USER":
      return initialUserState;

    default:
      return state;
  }
};
