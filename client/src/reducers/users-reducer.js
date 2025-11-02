const initialUserState = [];

export const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "POST_USERS":
      return [...action.payload];
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};
