import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app-container';
import NotFoundPage from './not-found-page';

import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';
import LoginPage from './login/login-page';
import Authentication from './authentication';

function requireAuth(nextState, replace) {
    if (!Authentication.isLoggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

module.exports = (
    <div>
        <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
);
