import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginCard from '../login-card';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper } from 'material-ui';

import * as authenticationActions from '../../../actions/authentication-actions';

const styles = {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

@connect(state => ({authentication: state.authentication}))
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {authentication, dispatch} = this.props;


        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={styles}>
                    <div>
                        <LoginCard
                            authentication={authentication}
                            {...bindActionCreators(authenticationActions, dispatch)} />
                        <Paper
                            {...bindActionCreators(authenticationActions, dispatch)}
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
            </MuiThemeProvider>
        );
    }
}

export default LoginPage;
