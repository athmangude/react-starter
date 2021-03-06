import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './app-container';
import Dashboard from './dashboard';
import NotFoundPage from './not-found-page';
import FormsyTest from './formsy-test';

import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';
import LoginPage from './login/login-page';
import Authentication from './authentication';

function requireAuth(nextState, replace) {
    if (!Authentication.isLoggedIn()) {
        replace({
            pathname: '/sign-in',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

module.exports = (
    <div>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Dashboard} onEnter={requireAuth} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/sign-in" component={LoginPage} />
            <Route path="/formsy-test" component={FormsyTest} />
            </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
);
