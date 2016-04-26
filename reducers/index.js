import { combineReducers } from 'redux';

import authentication from './authentication/index.js';
import app from './app/index.js';

const rootReducer = combineReducers({
    authentication,
    app
});

export default rootReducer;
