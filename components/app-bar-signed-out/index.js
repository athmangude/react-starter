import React, { Component } from 'react';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import { AppBar, FlatButton, NavigationClose, IconButton, IconMenu, MenuItem, CircularProgress } from 'material-ui';

class AppBarSignedOut extends Component {
    render () {
        return (
            <AppBar
                title="Bambapos"
                iconElementLeft={<img />}
            />
        );
    }
}

export default AppBarSignedOut;
