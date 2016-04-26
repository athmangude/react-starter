import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText, TextField, Avatar, CircularProgress } from 'material-ui';

import Authentication from '../../authentication';

class LoginCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChanged(event) {
        this.setState({
            email: event.target.value
        });
    }

    onPasswordChanged(event) {
        this.setState({
            password: event.target.value
        });
    }

    onSignInClicked() {
        this.props.signIn(this.state);
    }

    componentWillUpdate() {
        let { authentication } = this.props;
        console.log('component Will update', authentication);

        if (authentication.isLoggedIn) {
            this.context.router.push('/');
        }
    }

    componentDidUpdate() {

        let { authentication } = this.props;
        console.log('component Did update', authentication);

        if (authentication.isLoggedIn) {
            this.context.router.push('/');
        }
    }

    render() {
        var cardActionComponent;
        if (this.props.authentication.isSigningIn) {
            cardActionComponent = <CircularProgress />
        } else {
            cardActionComponent = <FlatButton label="Sign In" onClick={this.onSignInClicked.bind(this)} />
        }

        return (
            <Card style={{
                marginLeft: 20,
                marginRight: 20,
                marginTop: 50,
                maxWidth: 600,
            }}>
                <CardTitle
                    style={{
                        textAlign: 'center'
                    }}>
                    <Avatar
                        src="http://app.bambapos.com/images/bambapos_logo.png"
                        size={80} />
                    <h3 style={{
                        margin: 0,
                        marginTop: 10,
                        fontWeight: 400
                    }}>Bambapos</h3>
                </CardTitle>
                <CardText>
                    <TextField
                      hintText="Type your email"
                      floatingLabelText="Email"
                      type="email"
                      onChange={this.onEmailChanged.bind(this)}
                    /><br/>
                    <TextField
                      hintText="Type your password"
                      floatingLabelText="Password"
                      type="password"
                      onChange={this.onPasswordChanged.bind(this)}
                    /><br/>
                </CardText>
                <CardActions style={{
                    textAlign: 'center'
                }}>
                  {cardActionComponent}
                  <br />
                  <span style={{
                      fontSize: 13,
                      marginTop: 15,
                  }}>Don't have an account? <a style={{
                      textDecoration: 'none'
                  }} href="#">Sign Up </a></span>
                </CardActions>
            </Card>
        );
    }
}

// ask for `router` context
LoginCard.contextTypes = {
    router: React.PropTypes.object
}
export default LoginCard;
