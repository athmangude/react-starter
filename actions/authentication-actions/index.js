export const signIn = (credentials) => {
    return {
        type: 'SIGN_IN',
        credentials
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
