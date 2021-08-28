import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import apiSaga from './sagas';
import reducers from './reducers';

const initialiseSagaMiddleware = createSagaMiddleware();


// const composeFunc = require('redux-devtools-extension').composeWithDevTools;
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = () => {
    return createStore(
        reducers,
        storeEnhancers(
            applyMiddleware(initialiseSagaMiddleware)
        )
    );
};


initialiseSagaMiddleware.run(apiSaga);

export default store;