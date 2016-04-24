class Authentication {
    isLoggedIn() {
        if (localStorage.getItem('isLoggedIn'))
            return true;
        return false;
    }

    logOut() {
        localStorage.removeItem('isLoggedIn');
    }

    login() {
        localStorage.setItem('isLoggedIn', true);
    }
}

export default new Authentication();
