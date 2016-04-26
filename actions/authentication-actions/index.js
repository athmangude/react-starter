export const signIn = (credentials) => {
    return {
        type: 'SIGN_IN',
        credentials
    }
}

export const beginSignIn = (credentials) => {
    return {
        type: 'BEGIN_SIGN_IN'
    }
}

export const completeSignIn = (data) => {
    return {
        type: 'COMPLETE_SIGN_IN',
        data
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const processSignInResponse = (credentials) => {
    console.info('processing sign in response');
    return (dispatch) => {
        // we could dispatch an action to let the store know that the action has began
        // dispatch.actionBegan(credentials)

        localStorage.setItem('isSignedIn', true);
        localStorage.setItem('user', JSON.stringify(credentials));
        return dispatch(completeSignIn(credentials));
    }
}
