const initialState = {
    isLoading: true,
    isSideBarOpen: false,
    selectedDrawerMenuListItem: 1,
    title: 'Dashboard'
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'FINISH_LOADING':
            return Object.assign({}, state, { isLoading: false});
        case 'TOGGLE_SIDE_BAR':
            return Object.assign({}, state, { isSideBarOpen: !state.isSideBarOpen });
        case 'CHANGE_SELECTED_DRAWER_ITEM':
            return Object.assign({}, { selectedDrawerMenuListItem: action.index, title: action.title });
        default:
            return state;
    }
}

export default app;
