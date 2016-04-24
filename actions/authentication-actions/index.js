export const signingIn = (credentials) => {
    return {
        type: 'SIGNING_IN',
        credentials
    }
}

export const signedIn = (credentials) => {
    return {
        type: 'SIGNED_IN',
        credentials
    }
}

export const sendSignInRequest = (credentials) => {
    return {
        type: 'SEND_SIGN_IN_REQUEST',
        credentials
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
