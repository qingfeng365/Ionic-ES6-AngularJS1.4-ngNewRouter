'use strict';

const HTTP = new WeakMap();

class NotificationService {
    constructor($http){
        HTTP.set(this, $http);
    }

    static factory($http) {
        return new NotificationService($http);
    }
}

export {NotificationService}