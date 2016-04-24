import * as authenticationActions from '../../actions/authentication-actions';

class SocketConnection {
    constructor(store) {
        this.socketConnection = new WebSocket(this.getSocketUrl());

        this.socketConnection.onopen = function () {
            console.log('socket opened');
        }

        this.socketConnection.onmessage = function (message) {
            console.log('message received', message);

            switch (message.channel) {
                case 'SIGNING_IN':
                    store.dispatch(authenticationActions.signIn(message));
                    break;
                default:

            }
        }

        this.socketConnection.onclose = function () {
            console.log('socket closed');
        }

        this.socketConnection.onerror = function () {
            console.log('socket erred');
        }
    }

    getSocketUrl() {
        return window.location.host.includes('app.bambapos.com') ? 'ws://178.238.233.77:8090/websocket' : 'ws://91.194.91.50:8090/websocket';
    }

    send(payload) {
        this.socketConnection.send(JSON.stringify(payload));
    }
}

export default new SocketConnection();
