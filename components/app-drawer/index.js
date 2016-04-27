import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavLink from '../nav-link';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem, FontIcon, Colors, List, ListItem } from 'material-ui';

import * as appActions from '../../actions/app-actions';

const iconStyles = {
    marginRight: 12,
    position: 'relative',
    top: 6
};

@connect(state => ({app: state.app}))
class AppDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    handleToggle = () => {
        this.props.dispatch(appActions.toggleSideBar());
    }

    render() {
        const { app } = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Drawer
                    onBlur={this.handleToggle}
                    width={240}
                    open={app.isSideBarOpen}
                    docked={false}
                    onRequestChange={open => {this.handleToggle()}}
                >
                    <List>
                        <NavLink
                            to="/dashboard">
                            <ListItem primaryText="Dashboard" leftIcon={<FontIcon className="material-icons">dashboard</FontIcon>} />
                        </NavLink>
                        <NavLink
                            to="/transactions">
                            <ListItem primaryText="Transactions" leftIcon={<FontIcon className="material-icons">payment</FontIcon>} />
                        </NavLink>
                        <ListItem
                            primaryText="Reports"
                            leftIcon={<FontIcon className="material-icons">equalizer</FontIcon>}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="General Sales"
                                    leftIcon={<FontIcon className="material-icons">assignment</FontIcon>}
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Product Sales"
                                    leftIcon={<FontIcon className="material-icons">local_mall</FontIcon>}
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="Branch Sales"
                                    leftIcon={<FontIcon className="material-icons">store</FontIcon>}
                                />,
                                <ListItem
                                    key={4}
                                    primaryText="Staff Sales"
                                    leftIcon={<FontIcon className="material-icons">people_outline</FontIcon>}
                                />,
                                <ListItem
                                    key={5}
                                    primaryText="Inventory"
                                    leftIcon={<FontIcon className="material-icons">book</FontIcon>}
                                />,
                                <ListItem
                                    key={6}
                                    primaryText="Reorder Levels"
                                    leftIcon={<FontIcon className="material-icons">timeline</FontIcon>}
                                />,
                            ]}
                        />
                        <ListItem
                            primaryText="Inventory"
                            leftIcon={<FontIcon className="material-icons">book</FontIcon>}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Products"
                                    leftIcon={<FontIcon className="material-icons">local_mall</FontIcon>}
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="Categories"
                                    leftIcon={<FontIcon className="material-icons">local_offer</FontIcon>}
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="Suppliers"
                                    leftIcon={<FontIcon className="material-icons">person</FontIcon>}
                                />,
                                <ListItem
                                    key={4}
                                    primaryText="Outlets"
                                    leftIcon={<FontIcon className="material-icons">store</FontIcon>}
                                />,
                            ]}
                        />
                    </List>
                    <NavLink
                        to="/customers">
                        <ListItem primaryText="Customers" leftIcon={<FontIcon className="material-icons">people</FontIcon>} />
                    </NavLink>
                    <NavLink
                        to="/staff">
                        <ListItem primaryText="Staff" leftIcon={<FontIcon className="material-icons">people_outline</FontIcon>} />
                    </NavLink>
                    <NavLink
                        to="/settings">
                        <ListItem primaryText="Settings" leftIcon={<FontIcon className="material-icons">settings</FontIcon>} />
                    </NavLink>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

export default AppDrawer;
