'use strict';

export function UserService($http) {

    let bIsLoggedIn = false;
    let user = {};

    var sayHello = function (pMessage) {
        alert('Caller says: ' + pMessage);
    };

    var getUser = function () {
        return user;
    };

    var setUser = function (pUser) {
        user = pUser;
    };

    var isLoggedIn = function () {
        return (bIsLoggedIn === true);
    };

    var login = function (pCredentials) {
        return new Promise((resolve, reject) => {
            bIsLoggedIn = true;
            resolve();
        });
    };

    var logout = function () {
        bIsLoggedIn = false;
    };

    return {
        sayHello: sayHello,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }
}
