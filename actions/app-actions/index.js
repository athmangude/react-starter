import * as authenticationActions from '../authentication-actions/index.js';

export const finishLoading = (status) => {
    return {
        type: 'FINISH_LOADING',
        status
    }
}

export const toggleSideBar = () => {
    return {
        type: 'TOGGLE_SIDE_BAR'
    }
}

export const changeSelectedDrawerMenuItem = (index) => {
    return {
        type: 'CHANGE_SELECTED_DRAWER_ITEM',
        index
    }
}

export const loadApp = () => {
    return (dispatch) => {
        if (localStorage.getItem('isSignedIn') && localStorage.getItem('user') ) {
            dispatch(finishLoading(localStorage.getItem('isSignedIn')));
            dispatch(authenticationActions.completeSignIn(JSON.parse(localStorage.getItem('user'))));
            return;
        }

        return dispatch(finishLoading(false))
    }
}

export const routeToIndex = (index) => {
    return (dispatch) => {
        setTimeout(function () {
            console.log('routing to id');
            return dispatch(changeSelectedDrawerMenuItem(index));
        }, 400);
    }
}
