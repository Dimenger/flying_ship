import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { newsReducer } from "./reducers";
import { usersReducer } from "./reducers";
import { serviceReducer } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  news: newsReducer,
  users: usersReducer,
  service: serviceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
