import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';

import { AppBar, FlatButton, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import appTheme from '../../appTheme';

import * as appActions from '../../actions/app-actions';

@connect(state => ({app: state.app}))
class AppBarSignedIn extends Component {
    render () {
        return (
            <AppBar
                title={this.props.app.title}
                onLeftIconButtonTouchTap={this.props.handleToggle}
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
                }
            />
        );
    }
}

export default AppBarSignedIn;
