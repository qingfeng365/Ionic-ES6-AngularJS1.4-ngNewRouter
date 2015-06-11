// Ionic Starter App

import {onReady} from 'bootstrap';
import {configuration} from 'configuration';
import {MainController} from 'components/main/main';
import {ContactsController} from 'components/contacts/contacts';
import {ApplicationController} from 'components/application/application';

angular.module('myApp', ['ionic', 'myApp.controllers', 'ngNewRouter'])
    .config(configuration)
    .run(onReady);

angular.module('myApp.controllers', [])
	.controller('MainController', MainController)
    .controller('ContactsController', ContactsController)
	.controller('ApplicationController', ['$router', ApplicationController]);


//angular.module('myApp.services', [])
    //.service('Chats', Chats);
