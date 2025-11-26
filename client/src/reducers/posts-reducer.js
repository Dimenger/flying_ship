const inintialPostsState = {
  list: [],
  isLoading: false,
  failure: null,
};

export const postsReducer = (state = inintialPostsState, action) => {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, isLoading: true, failure: null };

    case "SORTING_POSTS_SUCCESS":
      return {
        ...state,
        list: [...action.payload],
        isLoading: false,
        failure: null,
      };

    case "REMOVE_POST_SUCCESS": {
      const newList = state.list.filter((post) => post.id !== action.payload);
      return {
        ...state,
        list: newList,
        isLoading: false,
        failure: null,
      };
    }

    case "ADD_NEW_POST_SUCCESS":
      return {
        ...state,
        list: [...state.list, action.payload],
        isLoading: false,
        failure: null,
      };

    case "EDIT_POST_SUCCESS": {
      const newList = state.list.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
      return {
        ...state,
        list: newList,
        isLoading: false,
        failure: null,
      };
    }

    case "POSTS_FAILURE":
      return { ...state, isLoading: false, failure: action.payload };

    default:
      return state;
  }
};
