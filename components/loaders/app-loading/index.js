import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { CircularProgress, Paper } from 'material-ui';

class AppLoading extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <CircularProgress />
                    <Paper
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                            backgroundColor: 'transparent'
                        }}
                        zDepth={0}
                    >
                        <span>Loading Bambapos</span>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppLoading;
