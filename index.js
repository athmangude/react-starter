import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

// import routes and pass them into <Router />
import routes from './components/routes';

const store = createStore(rootReducer,  window.devToolsExtension ? window.devToolsExtension() : f => f);

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
