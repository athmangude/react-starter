import React, { Component } from 'react';

import { Paper } from 'material-ui';

const styles = {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={styles} zDepth={0}>
                <h4>404</h4>
                <span>Page Not Found</span>
            </Paper>
        );
    }
}

export default NotFoundPage;
