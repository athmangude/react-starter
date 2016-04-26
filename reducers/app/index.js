const initialState = {
    isLoading: true,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'FINISH_LOADING':
            return Object.assign({}, state, { isLoading: false});
        default:
            return state;
    }
}

export default app;
