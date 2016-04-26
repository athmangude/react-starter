import * as authenticationActions from '../../actions/authentication-actions';

let socketConnection = null;

let getSocketUrl = () => {
    return window.location.host.includes('app.bambapos.com') ? 'ws://91.194.91.50:8090/websocket' : 'ws://178.238.233.77:8090/websocket';
}

let send = (payload) => {
    socketConnection.send(JSON.stringify(payload));
}

export const socketConnectionMiddleWare = (store) => {
    return next => action => {
        const result = next(action);

        if (socketConnection) {
            console.log(action);
            switch (action.type) {
                case 'SIGN_IN':
                    send(Object.assign(action.credentials, { channel: 'LOGIN' }));
                    break;
                default:
            }
        } else {
            // socket connection is dead
            // reopen it
            // set appropriate items in state
        }

        return result;
    }
}

export default (store) => {
    socketConnection = new WebSocket(getSocketUrl());

    socketConnection.onopen = function () {
        console.log('socket opened');
    }

    socketConnection.onmessage = function (message) {
        console.log('message received', message);
        var data = JSON.parse(message.data)

        switch (data.channel) {
            case 'LOGIN':
                store.dispatch(authenticationActions.completeSignIn(data));
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
