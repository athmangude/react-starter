import { push } from 'react-router-redux'

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

export const changeSelectedDrawerMenuListItem = (index) => {
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
            dispatch(changeSelectedDrawerMenuItem(index));

            let path = null;
            switch (index) {
                case 1:
                    path = '/dashboard';
                    break;
                case 2:
                    path = '/transactions';
                    break;
                case 3:
                    path = '/reports';
                    break;
                case 4:
                    path = '/reports/general-sales';
                    break;
                case 5:
                    path = '/reports/product-sales';
                    break;
                case 6:
                    path = '/reports/branch-sales';
                    break;
                case 7:
                    path = '/reports/staff';
                    break;
                case 8:
                    path = '/reports/inventory';
                    break;
                case 9:
                    path = '/reports/reorder-levels';
                    break;
                case 10:
                    path = '/inventory';
                    break;
                case 11:
                    path = '/inventory/products';
                    break;
                case 12:
                    path = '/inventory/categories';
                    break;
                case 13:
                    path = '/inventory/suppliers';
                    break;
                case 14:
                    path = '/inventory/outlets';
                    break;
                case 15:
                    path = '/customers';
                    break;
                case 16:
                    path = '/staff';
                    break;
                case 17:
                    path = '/settings';
                    break;
                default:
                    path = '/404';
            }

            dispatch(push(path));
        }, 400);
    }
}
