const rootReducer = (state, action = 'SIGNING_IN') => {
    switch (action.type) {
        case 'SIGNING_IN':
            return Object.assign({}, state, { isSigningIn: true });
        default:
            return state;
    }
}

export default rootReducer;
