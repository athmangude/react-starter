import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import appTheme from '../../appTheme'

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../app';

injectTapEventPlugin();

const bambaposTheme = getMuiTheme(appTheme);

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={bambaposTheme}>
                <App handleToggle={this.handleToggle} />
            </MuiThemeProvider>
        );
    }
}

export default AppContainer;
