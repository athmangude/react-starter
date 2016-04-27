import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import * as appActions from '../../actions/app-actions';

@connect(state => ({app: state.app}))
class AppBarSignedIn extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar
                    title="Bambapos"
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
            </MuiThemeProvider>
        );
    }
}

export default AppBarSignedIn;
