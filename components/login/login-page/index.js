import React, {Component} from 'react';

import LoginCard from '../login-card';

import Paper from 'material-ui/lib/paper';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                minHeight: 'calc(100vh - 100px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div>
                    <LoginCard />
                    <Paper
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                            backgroundColor: 'transparent'
                        }}
                        zDepth={0}
                    ><a style={{
                        textDecoration: 'none',
                        fontSize: 13
                    }} href="#">Forgot Password</a></Paper>
                </div>
            </div>
        );
    }
}

export default LoginPage;
