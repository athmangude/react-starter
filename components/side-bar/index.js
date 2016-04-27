import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavLink from '../nav-link';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem, FontIcon, Colors } from 'material-ui';

import * as appActions from '../../actions/app-actions';

const iconStyles = {
    marginRight: 12,
    position: 'relative',
    top: 6
};

@connect(state => ({app: state.app}))
class SideBar extends React.Component {
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
                    width={200}
                    open={app.isSideBarOpen}
                    docked={false}
                    onRequestChange={open => {this.handleToggle()}}
                >
                    <NavLink
                        to="/dashboard">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>dashboard</FontIcon>
                            Dashboard
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/inventory">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>book</FontIcon>
                            Inventory
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/products">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>local_mall</FontIcon>
                            Products
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/categories">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>local_offer</FontIcon>
                            Categories
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/suppliers">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>person</FontIcon>
                            Suppliers
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/outlets">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>store</FontIcon>
                            Outlets
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/customers">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>people</FontIcon>
                            Customers
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/reports">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>equalizer</FontIcon>
                            Reports
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/staff">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>people_outline</FontIcon>
                            Staff
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/settings">
                        <MenuItem onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons" style={iconStyles}>settings</FontIcon>
                            Settings
                        </MenuItem>
                    </NavLink>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

export default SideBar;
