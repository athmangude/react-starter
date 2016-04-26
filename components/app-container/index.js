import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import { AppBar, FlatButton, NavigationClose, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';

import AppLoading from '../loaders/app-loading';
import AppBarSignedIn from '../app-bar-signed-in';
import AppBarSignedOut from '../app-bar-signed-out';

import Authentication from '../authentication';

@connect(state => ({authentication: state.authentication}))
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        var loginState = Authentication.isLoggedIn();
        if (Authentication.isLoggedIn) {
            this.setState({
                isLoading: false,
                isLoggedIn: loginState,
            });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <AppLoading />
            );
        } else if (this.props.authentication.isLoggedIn) {
            return (
                <div>
                    <AppBarSignedIn />
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div>
                    <AppBarSignedOut />
                    {this.props.children}
                </div>
            );
        }
    }
}

export default App;
