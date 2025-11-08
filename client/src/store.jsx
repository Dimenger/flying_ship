import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import {
  postsReducer,
  usersReducer,
  userReducer,
  serviceReducer,
  errorReducer,
} from "./reducers";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  user: userReducer,
  service: serviceReducer,
  error: errorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
