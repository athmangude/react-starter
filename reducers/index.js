import { combineReducers } from 'redux';

import authentication from './authentication/index.js';

const rootReducer = combineReducers({
    authentication
});

export default rootReducer;
