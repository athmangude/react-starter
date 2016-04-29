import React, { Component } from 'react';

import { Paper } from 'material-ui';

class CardsWrapper extends Component {
    render() {
        return (
            <Paper>{this.props.children}</Paper>
        );
    }
}

export default CardsWrapper;
