import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavLink from '../nav-link';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem, FontIcon, Colors, List, ListItem, MakeSelectable } from 'material-ui';

import * as appActions from '../../actions/app-actions';

let SelectableList = MakeSelectable(List);

const iconStyles = {
    marginRight: 12,
    position: 'relative',
    top: 6
};

function wrapState(ComposedComponent) {
    return class SelectableList extends React.Component {
        static propTypes = {
            children: React.PropTypes.node.isRequired,
            defaultValue: React.PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });

            this.props.routeToIndex(index);
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

@connect(state => ({app: state.app}))
class AppDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        this.props.dispatch(appActions.toggleSideBar());
    }

    render() {
        const { app, dispatch } = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Drawer
                    onBlur={this.handleToggle}
                    width={240}
                    open={app.isSideBarOpen}
                    docked={false}
                    onRequestChange={open => {this.handleToggle()}}
                >
                    <SelectableList
                        defaultValue={1}
                        app={app}
                        {...bindActionCreators(appActions, dispatch)} >
                        <ListItem
                            primaryText="Dashboard"
                            value={1}
                            leftIcon={<FontIcon className="material-icons">dashboard</FontIcon>}
                        />
                        <ListItem primaryText="Transactions" value={2} leftIcon={<FontIcon className="material-icons">payment</FontIcon>} />
                        <ListItem
                            primaryText="Reports"
                            value={3}
                            leftIcon={<FontIcon className="material-icons">equalizer</FontIcon>}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    value={4}
                                    primaryText="General Sales"
                                    leftIcon={<FontIcon className="material-icons">assignment</FontIcon>}
                                />,
                                <ListItem
                                    value={5}
                                    primaryText="Product Sales"
                                    leftIcon={<FontIcon className="material-icons">local_mall</FontIcon>}
                                />,
                                <ListItem
                                    value={6}
                                    primaryText="Branch Sales"
                                    leftIcon={<FontIcon className="material-icons">store</FontIcon>}
                                />,
                                <ListItem
                                    value={7}
                                    primaryText="Staff Sales"
                                    leftIcon={<FontIcon className="material-icons">people_outline</FontIcon>}
                                />,
                                <ListItem
                                    value={8}
                                    primaryText="Inventory"
                                    leftIcon={<FontIcon className="material-icons">book</FontIcon>}
                                />,
                                <ListItem
                                    value={9}
                                    primaryText="Reorder Levels"
                                    leftIcon={<FontIcon className="material-icons">timeline</FontIcon>}
                                />,
                            ]}
                        />
                        <ListItem
                            primaryText="Inventory"
                            value={10}
                            leftIcon={<FontIcon className="material-icons">book</FontIcon>}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    value={11}
                                    primaryText="Products"
                                    leftIcon={<FontIcon className="material-icons">local_mall</FontIcon>}
                                />,
                                <ListItem
                                    value={12}
                                    primaryText="Categories"
                                    leftIcon={<FontIcon className="material-icons">local_offer</FontIcon>}
                                />,
                                <ListItem
                                    value={13}
                                    primaryText="Suppliers"
                                    leftIcon={<FontIcon className="material-icons">person</FontIcon>}
                                />,
                                <ListItem
                                    value={14}
                                    primaryText="Outlets"
                                    leftIcon={<FontIcon className="material-icons">store</FontIcon>}
                                />,
                            ]}
                        />
                        <ListItem primaryText="Customers" value={15} leftIcon={<FontIcon className="material-icons">people</FontIcon>} />
                        <ListItem primaryText="Staff" value={16} leftIcon={<FontIcon className="material-icons">people_outline</FontIcon>} />
                        <ListItem primaryText="Settings" value={17} leftIcon={<FontIcon className="material-icons">settings</FontIcon>} />
                    </SelectableList>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

export default AppDrawer;
