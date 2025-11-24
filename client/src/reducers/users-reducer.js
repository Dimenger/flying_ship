const initialUsersState = {
  list: [],
  isLoading: false,
  failure: null,
};

export const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case "USERS_REQUEST":
      return { ...state, isLoading: true, failure: null };

    case "POST_USERS_SUCCESS":
      return {
        ...state,
        list: [...action.payload],
        isLoading: false,
        failure: null,
      };

    case "CLEAR_USERS_LIST_SUCCESS":
      return initialUsersState;

    case "REMOVE_USER_SUCCESS": {
      const newList = state.list.filter((user) => user.id !== action.payload);
      return {
        ...state,
        list: newList,
        isLoading: false,
        failure: null,
      };
    }

    case "EDIT_USER_ROLE_SUCCESS": {
      const newList = state.list.map((user) =>
        user.id === action.payload.id
          ? { ...user, role: action.payload.role }
          : user
      );
      return {
        ...state,
        list: newList,
        isLoading: false,
        failure: null,
      };
    }

    case "USERS_FAILURE":
      return { ...state, isLoading: false, failure: action.payload };

    default:
      return state;
  }
};
