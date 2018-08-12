import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let middlewares = [thunk];

export default function configureStore() {
  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middlewares = [...middlewares, logger];
  }

  return createStore(rootReducer, undefined, applyMiddleware(...middlewares));
}
