import { createStore, applyMiddleware } from "redux";

// middleware
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducers.js";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
