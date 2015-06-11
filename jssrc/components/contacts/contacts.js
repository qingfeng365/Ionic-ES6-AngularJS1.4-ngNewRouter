'use strict';

class ContactsController {
    constructor(UserService) {
        console.log('ContactsController constructor');
        console.log(UserService);
        this.myDataOnScope = 'Hello Ionic!!';
        this.UserService = UserService;
    }

    sayHello(){
        console.log('say it!');
        this.UserService.sayHello('Hello');
    }
}
ContactsController.$inject = ['userService'];
export {ContactsController}