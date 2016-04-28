import React, { Component } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText, TextField, Avatar, CircularProgress} from 'material-ui';
import {blue500} from 'material-ui/styles/colors';
import { Link } from 'react-router';

// import { Paper, RaisedButton, MenuItem } from 'material-ui'
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';


import Authentication from '../../authentication';

const linkStyles = {
    textDecoration: 'none',
    fontSize: 13,
    color: blue500,
}

class LoginCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            canSubmit: false
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

    enableButton() {
        this.setState({
          canSubmit: true,
        });
    }

    disableButton() {
        this.setState({
          canSubmit: false,
        });
    }

    submitForm(data) {
        this.setState(data)
        this.props.signIn(data);
    }

    notifyFormError(data) {
        console.error('Form error:', data);
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
            cardActionComponent = <FlatButton disabled={!this.state.canSubmit} type="submit" label="Sign In" />
        }

        return (
            <div>
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
                        <Formsy.Form
                            onValid={this.enableButton.bind(this)}
                            onInvalid={this.disableButton.bind(this)}
                            onValidSubmit={this.submitForm.bind(this)}
                            onInvalidSubmit={this.notifyFormError.bind(this)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                            <FormsyText
                                name="email"
                                type="email"
                                value={this.state.email}
                                validations="isEmail"
                                validationError={"Provide a valid email"}
                                required
                                hintText="type your email"
                                floatingLabelText="Email"
                                onChange={this.onEmailChanged} />
                            <FormsyText
                                name="password"
                                type="password"
                                value={this.state.password}
                                validations={{minLength: 8}}
                                validationError={"Password should be at least 8 characters long"}
                                required
                                hintText="type your password"
                                floatingLabelText="Password"
                                onChange={this.onPasswordChanged} />
                            <br />
                            {cardActionComponent}
                        </Formsy.Form>
                    </CardText>
                    <CardActions style={{
                        textAlign: 'center'
                    }}>
                      <span style={{
                          fontSize: 13,
                          marginTop: 15,
                      }}>Don't have an account? <Link to="/signup" style={linkStyles} href="#">Sign Up </Link></span>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// ask for `router` context
LoginCard.contextTypes = {
    router: React.PropTypes.object
}
export default LoginCard;
