import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper } from 'material-ui';

const styles = {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Paper style={styles} zDepth={0}>
                    <h4>404</h4>
                    <span>Page Not Found</span>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default NotFoundPage;
