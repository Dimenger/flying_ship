const initialUsersState = [];

export const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case "POST_USERS":
      return [...action.payload];

    case "CLEAR_USERS_LIST":
      return initialUsersState;

    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);

    case "EDIT_USER_ROLE":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, role: action.payload.role }
          : user
      );

    default:
      return state;
  }
};
