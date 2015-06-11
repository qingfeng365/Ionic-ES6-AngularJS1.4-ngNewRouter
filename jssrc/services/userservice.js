'use strict';

const HTTP          = new WeakMap();
const USER          = new WeakMap();

class UserService {

    constructor($http){
        console.log('userservice constructor');
        HTTP.set(this, $http);
        this.isLoggedIn = false;
    }

    sayHello(message){
        console.log('UserService says "Hello!"');
        alert('Caller says: ' + message);
    }

    getUser(){
        return USER.get(this);
    }

    setUser(user){
        return USER.set(this, user);
    }

    isLoggedIn(){
        return this.isLoggedIn;
    }

    login(credentials){
        return new Promise((resolve,reject) => {
            this.isLoggedIn = true;
            resolve();
        });
    }

    logout(){
        this.isLoggedIn = false;
    }

    static factory($http) {
        return new UserService($http);
    }
}

export {UserService}