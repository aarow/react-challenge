import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import candidates from './reducers/candidateReducers';
import steps from "./reducers/stepReducers";

const reducers = combineReducers({
    candidates,
    steps,
});

// const composeFunc = require('redux-devtools-extension').composeWithDevTools;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let middleware = [thunk];

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export default store;
