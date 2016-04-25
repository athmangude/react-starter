export const signIn = (credentials) => {
    return {
        type: 'SIGN_IN',
        credentials
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
