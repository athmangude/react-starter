import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { AppBar, FlatButton, NavigationClose, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';

import AppLoading from '../loaders/app-loading';
import AppBarSignedIn from '../app-bar-signed-in';
import AppBarSignedOut from '../app-bar-signed-out';
import AppDrawer from '../app-drawer';

import Authentication from '../authentication';

import * as appActions from '../../actions/app-actions';


@connect(state => ({app: state.app ,authentication: state.authentication}))
class App extends Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.dispatch(appActions.toggleSideBar());
    }

    componentDidMount() {
        this.props.dispatch(appActions.loadApp());
    }

    render() {
        if (this.props.app.isLoading) {
            return (
                <AppLoading />
            );
        } else if (this.props.authentication.isLoggedIn) {
            return (
                <div>
                    <AppBarSignedIn handleToggle={this.handleToggle} />
                    <AppDrawer />
                    <div style={{margin: 10}}>
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default App;
