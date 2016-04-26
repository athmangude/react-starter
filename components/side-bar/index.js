import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LeftNav, AppBar, RaisedButton } from 'material-ui';

@connect(state => ({app: state.app}))
class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.app.isSideBarOpen);

        const { app } = this.props;
        return (
            <div>
                <LeftNav width={200} open={app.isSideBarOpen} >
                    <AppBar title="AppBar"/>
                </LeftNav>
            </div>
        );
    }
}

export default SideBar;
