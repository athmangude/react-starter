import React, { Component } from 'react';

import { Paper } from 'material-ui';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <span>Not Found</span>
            </Paper>
        );
    }
}

export default NotFoundPage;
