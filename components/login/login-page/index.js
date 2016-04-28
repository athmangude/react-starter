import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginCard from '../login-card';

import { Paper } from 'material-ui';
import {blue500} from 'material-ui/styles/colors';
import { Link } from 'react-router';

import * as authenticationActions from '../../../actions/authentication-actions';

const styles = {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const linkStyles = {
    textDecoration: 'none',
    fontSize: 13,
    color: blue500
};

@connect(state => ({authentication: state.authentication}))
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {authentication, dispatch} = this.props;

        return (
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
                    ><Link style={linkStyles} to="/forgot-password">Forgot Password</Link></Paper>
                </div>
            </div>
        );
    }
}

export default LoginPage;
