// Ionic Starter App

//Config
import {onReady}                from './bootstrap';
import {configuration}          from './configuration';

//Controller
import {MainController}         from './components/main/main';
import {ContactsController}     from './components/contacts/contacts';
import {ApplicationController}  from './components/application/application';

//Services
import {NotificationService}    from './services/notificationservice';
import {UserService}            from './services/userservice';

let UserServiceInstance         = UserService.factory;
let NotificationServiceInstance = NotificationService.factory;

angular.module('myApp',
    [
        'ionic',
        'myApp.controllers',
        'myApp.services',
        'ngNewRouter'
    ])
    .config(configuration)
    .run(onReady);

angular.module('myApp.services', [])
    .factory('UserService', ['$http',UserServiceInstance])
    .factory('NotificationService', ['$http', NotificationServiceInstance]);

angular.module('myApp.controllers', [])
    .controller('MainController', [MainController])
    .controller('ContactsController', ['UserService', ContactsController])
	.controller('ApplicationController', ['$router', ApplicationController]);


