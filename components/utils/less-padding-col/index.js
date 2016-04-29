import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Radium from 'radium';

@Radium
class LessPaddingCol extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col
                className={this.props.className}
                lg={this.props.lg}
                md={this.props.md}
                sm={this.props.sm}
                xs={this.props.xs}
                style={{
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    {this.props.children}
            </Col>
        );
    }
}

export default LessPaddingCol;
