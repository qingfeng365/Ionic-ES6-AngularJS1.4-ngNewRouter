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

angular.module('myApp',
    [
        'ionic',
        'ngNewRouter'
    ])
    .factory('userService', UserService)
    .factory('notificationService', NotificationService)
    .controller('ApplicationController', ['$router', ApplicationController])
    .controller('MainController', [MainController])
    .controller('ContactsController', ['userService', ContactsController])
    .config(configuration)
    .run(onReady);
