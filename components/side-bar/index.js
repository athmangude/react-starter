import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavLink from '../nav-link';

import { LeftNav, MenuItem } from 'material-ui';

import * as appActions from '../../actions/app-actions';

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
            <div>
                <LeftNav
                    onBlur={this.handleToggle}
                    width={200}
                    open={app.isSideBarOpen}
                    docked={false}
                    onRequestChange={open => {this.handleToggle()}}
                >
                    <NavLink
                        to="/dashboard">
                        <MenuItem onTouchTap={this.handleToggle}>Dashboard</MenuItem>
                    </NavLink>
                    <NavLink to="/inventory">
                        <MenuItem onTouchTap={this.handleToggle}>Inventory</MenuItem>
                    </NavLink>
                    <NavLink to="/products">
                        <MenuItem onTouchTap={this.handleToggle}>Products</MenuItem>
                    </NavLink>
                    <NavLink to="/categories">
                        <MenuItem onTouchTap={this.handleToggle}>Categories</MenuItem>
                    </NavLink>
                    <NavLink to="/suppliers">
                        <MenuItem onTouchTap={this.handleToggle}>Suppliers</MenuItem>
                    </NavLink>
                    <NavLink to="/outlets">
                        <MenuItem onTouchTap={this.handleToggle}>Outlets</MenuItem>
                    </NavLink>
                    <NavLink to="/customers">
                        <MenuItem onTouchTap={this.handleToggle}>Customers</MenuItem>
                    </NavLink>
                    <NavLink to="/reports">
                        <MenuItem onTouchTap={this.handleToggle}>Reports</MenuItem>
                    </NavLink>
                    <NavLink to="/staff">
                        <MenuItem onTouchTap={this.handleToggle}>Staff</MenuItem>
                    </NavLink>
                    <NavLink to="/settings">
                        <MenuItem onTouchTap={this.handleToggle}>Settings</MenuItem>
                    </NavLink>
                </LeftNav>
            </div>
        );
    }
}

export default SideBar;
