const initialState = {
    isLoggedIn: false,
    isSigningIn: false
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return Object.assign({}, state, { isSigningIn: true });
        default:
            return state;
    }
}

export default authentication;
