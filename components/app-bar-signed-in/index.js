import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';

import { AppBar, FlatButton, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

import * as appActions from '../../actions/app-actions';

@connect(state => ({app: state.app}))
class AppBarSignedIn extends Component {
    handleToggle = () => {
        this.props.dispatch(appActions.toggleSideBar());
    }

    render () {

        return (
            <AppBar
            title="Bambapos"
            iconElementLeft={
                <IconButton
                    onFocus={this.handleToggle} >
                    <NavigationClose />
                </IconButton>
            }
            iconElementRight={
                <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
                </IconMenu>
            } />
        );
    }
}

export default AppBarSignedIn;
