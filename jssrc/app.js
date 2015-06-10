// Ionic Starter App

import {onReady} from 'bootstrap';
import {configuration} from 'configuration';
import {MainController} from 'components/main/maincontroller';
import {ApplicationController} from 'components/application/applicationcontroller';

angular.module('myApp', ['ionic', 'myApp.controllers', 'ngNewRouter'])
    .config(configuration)
    .run(onReady);

angular.module('myApp.controllers', [])
	.controller('MainController', MainController)
	.controller('ApplicationController', ['$router', ApplicationController]);


//angular.module('myApp.services', [])
    //.service('Chats', Chats);
