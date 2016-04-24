import SocketConnection from '../socket-connection';

class Authentication {
    isLoggedIn() {
        if (localStorage.getItem('isLoggedIn'))
            return true;
        return false;
    }

    signOut() {
        localStorage.removeItem('isLoggedIn');
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
