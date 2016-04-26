import SocketConnection from '../socket-connection';

class Authentication {
    isLoggedIn() {
        if (localStorage.getItem('isSignedIn'))
            return true;
        return false;
    }

    signOut() {
        localStorage.removeItem('isSignedIn');
    }

    signIn(credentials) {
        SocketConnection.send({
            "email": credentials.email,
            "password": credentials.password,
            "channel": "LOGIN"
        });
    }
}

export default new Authentication();
