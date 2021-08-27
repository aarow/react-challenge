import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './styles.less';

import createStore from './redux/create';
import Candidates from './screens/Candidates'


function init(el, initialState) {
    const store = createStore(initialState);

    ReactDOM.render((
        <Provider store={store}>
            <Candidates />
        </Provider>
    ), el);
}

export {
    init,
};
