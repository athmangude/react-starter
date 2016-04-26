import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import { AppBar, FlatButton, NavigationClose, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';

// import injectTapEventPlugin from 'react-tap-event-plugin';

import AppLoading from '../loaders/app-loading';
import AppBarSignedIn from '../app-bar-signed-in';
import AppBarSignedOut from '../app-bar-signed-out';
import SideBar from '../side-bar';

import Authentication from '../authentication';

import * as appActions from '../../actions/app-actions';

// injectTapEventPlugin();

@connect(state => ({app: state.app ,authentication: state.authentication}))
class App extends Component {
    constructor(props) {
        super(props);
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
                    <AppBarSignedIn />
                    <SideBar />
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
