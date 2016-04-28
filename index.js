import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers';

import openSocket, { socketConnectionMiddleWare } from './components/socket-connection';

// import routes and pass them into <Router />
import routes from './components/routes';
const createStoreWithMiddleware = applyMiddleware(socketConnectionMiddleWare, thunk, routerMiddleware(browserHistory))(createStore);
const store = createStoreWithMiddleware(rootReducer,  window.devToolsExtension ? window.devToolsExtension() : f => f);
openSocket(store);

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
