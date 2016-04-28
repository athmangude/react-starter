import React, { Component } from 'react';

import { CircularProgress, Paper } from 'material-ui';

class AppLoading extends Component {
    render () {
        return (
            <div>
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
            </div>
        );
    }
}

export default AppLoading;
