const initialState = {
    isLoggedIn: false,
    isSigningIn: false
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
            return Object.assign({}, state, { isSigningIn: true });
        case 'COMPLETE_SIGN_IN':
            if (action.data.status) {
                return Object.assign({}, state, { isSigningIn: false, isLoggedIn: true });
            }
            return Object.assign({}, state, { isSigningIn: false });
        default:
            return state;
    }
}

export default authentication;
