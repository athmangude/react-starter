import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

const cardStyles = {
    marginBottom: 10,
    textAlign: 'center',
    padding: 30
}

class DashboardCard extends Component {
    render() {
        return (
            <Card style={cardStyles}>
                <CardTitle subtitle={this.props.title} />
                <CardTitle title={this.props.value} />
            </Card>
        );
    }
}

export default DashboardCard;
