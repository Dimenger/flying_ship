const initialUserState = {
  users: [],
};

export const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "POST_USERS":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
