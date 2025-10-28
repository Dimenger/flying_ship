const initialUserState = [];

export const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "POST_USERS":
      return [...action.payload];

    default:
      return state;
  }
};
