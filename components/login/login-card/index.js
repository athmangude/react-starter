import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText, TextField, Avatar, CircularProgress } from 'material-ui';

class LoginCard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    onSignInClicked() {
        this.setState({
            isLoading: true
        });

        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 2000);
    }

    render() {
        var cardActionComponent;
        if (this.state.isLoading) {
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
                    /><br/>
                    <TextField
                      hintText="Type your password"
                      floatingLabelText="Password"
                      type="password"
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

export default LoginCard;
