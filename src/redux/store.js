import { createStore, applyMiddleware } from "redux";

// middleware
import thunkMiddleware from "redux-thunk";

// reducer file we have not created yet
import { rootReducer } from "./reducers.js";

// from redux call createStore(reducer, [preloadedState], [enhancer])
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
