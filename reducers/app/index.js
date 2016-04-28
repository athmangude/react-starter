const initialState = {
    isLoading: true,
    isSideBarOpen: true,
    selectedDrawerMenuListItem: 1
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'FINISH_LOADING':
            return Object.assign({}, state, { isLoading: false});
        case 'TOGGLE_SIDE_BAR':
            return Object.assign({}, state, { isSideBarOpen: !state.isSideBarOpen })
        default:
            return state;
    }
}

export default app;
