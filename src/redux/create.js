import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// const composeFunc = require('redux-devtools-extension').composeWithDevTools;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let middleware = [thunk];

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export default store;
