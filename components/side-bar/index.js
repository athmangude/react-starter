import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
                    <MenuItem onTouchTap={this.handleToggle}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleToggle}>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
    }
}

export default SideBar;
