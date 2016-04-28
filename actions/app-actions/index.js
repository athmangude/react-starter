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

export const changeSelectedDrawerMenuListItem = (index, title) => {
    return {
        type: 'CHANGE_SELECTED_DRAWER_ITEM',
        index,
        title
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
            let path = null;
            let title = null;
            switch (index) {
                case 1:
                    path = '/dashboard';
                    title = 'Dashboard';
                    break;
                case 2:
                    path = '/transactions';
                    title = 'Transactions';
                    break;
                case 3:
                    path = '/reports';
                    title = 'Reports';
                    break;
                case 4:
                    path = '/reports/general-sales';
                    title = 'Reports';
                    break;
                case 5:
                    path = '/reports/product-sales';
                    title = 'Reports';
                    break;
                case 6:
                    path = '/reports/branch-sales';
                    title = 'Reports';
                    break;
                case 7:
                    path = '/reports/staff';
                    title = 'Reports';
                    break;
                case 8:
                    path = '/reports/inventory';
                    title = 'Reports';
                    break;
                case 9:
                    path = '/reports/reorder-levels';
                    title = 'Reports';
                    break;
                case 10:
                    path = '/inventory';
                    title = 'Inventory';
                    break;
                case 11:
                    path = '/inventory/products';
                    title = 'Inventory';
                    break;
                case 12:
                    path = '/inventory/categories';
                    title = 'Inventory';
                    break;
                case 13:
                    path = '/inventory/suppliers';
                    title = 'Inventory';
                    break;
                case 14:
                    path = '/inventory/outlets';
                    title = 'Inventory';
                    break;
                case 15:
                    path = '/customers';
                    title = 'Customers';
                    break;
                case 16:
                    path = '/staff';
                    title = 'Staff';
                    break;
                case 17:
                    path = '/settings';
                    title = 'Settings';
                    break;
                default:
                    path = '/404';
            }

            if (path === null || path === '/404') {
                return dispatch(push(path));
            }

            dispatch(changeSelectedDrawerMenuListItem(index, title));
            dispatch(push(path));
            return;
        }, 500);
    }
}
