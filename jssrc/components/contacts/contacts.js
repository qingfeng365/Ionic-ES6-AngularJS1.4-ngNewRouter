'use strict';

class ContactsController {
    constructor(userservice) {
        console.log('ContactsController constructor');
        this.myDataOnScope = 'Hello Ionic!!';
        this.UserService = userservice;
    }

    sayHello() {
        this.UserService.sayHello('Hello');
    }
}
export default {ContactsController}
