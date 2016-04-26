import * as authenticationActions from '../authentication-actions/index.js';

export const finishLoading = (status) => {
    return {
        type: 'FINISH_LOADING',
        status
    }
}

export const loadApp = () => {
    return (dispatch) => {
        setTimeout(function () {
            if (localStorage.getItem('isSignedIn') && localStorage.getItem('user') ) {
                dispatch(finishLoading(localStorage.getItem('isSignedIn')));
                dispatch(authenticationActions.completeSignIn(JSON.parse(localStorage.getItem('user'))));
                return;
            }

            return dispatch(finishLoading(false))
        }, 1000);
    }
}
