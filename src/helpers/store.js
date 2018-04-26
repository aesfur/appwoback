import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";
import Thunk from "redux-thunk";
import Reducers from "../reducers/reducers";

export const store = createStore(
  Reducers,
  applyMiddleware(
    Thunk,
    ReduxPromise
  )
);