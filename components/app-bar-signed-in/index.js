import React, { Component } from 'react';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import { AppBar, FlatButton, NavigationClose, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';

class AppBarSignedIn extends Component {
    render () {
        return (
            <AppBar
            title="Bambapos"
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
