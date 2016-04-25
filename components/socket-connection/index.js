import * as authenticationActions from '../../actions/authentication-actions';

let socketConnection = null;

let getSocketUrl = () => {
    return window.location.host.includes('app.bambapos.com') ? 'ws://178.238.233.77:8090/websocket' : 'ws://91.194.91.50:8090/websocket';
}

let send = (payload) => {
    socketConnection.send(JSON.stringify(payload));
}

export default (store) => {
    socketConnection = new WebSocket(getSocketUrl());

    socketConnection.onopen = function () {
        console.log('socket opened');
    }

    socketConnection.onmessage = function (message) {
        console.log('message received', message);

        switch (message.channel) {
            case 'SIGNING_IN':
                store.dispatch(authenticationActions.signIn(message));
                break;
            default:

        }
    }

    socketConnection.onclose = function () {
        console.log('socket closed');
    }

    socketConnection.onerror = function () {
        console.log('socket erred');
    }
}
