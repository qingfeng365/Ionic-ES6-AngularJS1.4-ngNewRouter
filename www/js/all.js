define("bootstrap", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.onReady = onReady;

    function onReady($ionicPlatform) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
});
define('configuration', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configuration = configuration;

	function configuration($componentLoaderProvider) {

		$componentLoaderProvider.setTemplateMapping(function (name) {
			return 'templates/' + name + '/' + name + '.html';
		});

		$componentLoaderProvider.setCtrlNameMapping(function (name) {
			var controllerName = '';
			if (name.indexOf('/') !== -1) {
				var part = name.split('/');
				controllerName = part[1][0].toUpperCase() + part[1].substr(1) + 'Controller';
				//console.log(controllerName);
				return controllerName;
			} else {
				controllerName = name[0].toUpperCase() + name.substr(1) + 'Controller';
				//console.log(controllerName);
				return controllerName;
			}
		});
	}
});
define('services/notificationservice', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var HTTP = new WeakMap();

    var NotificationService = (function () {
        function NotificationService($http) {
            _classCallCheck(this, NotificationService);

            HTTP.set(this, $http);
        }

        _createClass(NotificationService, null, [{
            key: 'factory',
            value: function factory($http) {
                return new NotificationService($http);
            }
        }]);

        return NotificationService;
    })();

    exports.NotificationService = NotificationService;
});
define('services/userservice', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var HTTP = new WeakMap();
    var USER = new WeakMap();

    var UserService = (function () {
        function UserService($http) {
            _classCallCheck(this, UserService);

            console.log('userservice constructor');
            HTTP.set(this, $http);
            this.isLoggedIn = false;
        }

        _createClass(UserService, [{
            key: 'sayHello',
            value: function sayHello(message) {
                console.log('UserService says "Hello!"');
                alert('Caller says: ' + message);
            }
        }, {
            key: 'getUser',
            value: function getUser() {
                return USER.get(this);
            }
        }, {
            key: 'setUser',
            value: function setUser(user) {
                return USER.set(this, user);
            }
        }, {
            key: 'isLoggedIn',
            value: function isLoggedIn() {
                return this.isLoggedIn;
            }
        }, {
            key: 'login',
            value: function login(credentials) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.isLoggedIn = true;
                    resolve();
                });
            }
        }, {
            key: 'logout',
            value: function logout() {
                this.isLoggedIn = false;
            }
        }], [{
            key: 'factory',
            value: function factory($http) {
                return new UserService($http);
            }
        }]);

        return UserService;
    })();

    exports.UserService = UserService;
});
define('components/application/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var ApplicationController = function ApplicationController($router) {
        _classCallCheck(this, ApplicationController);

        console.log('ApplicationController constructor');
        $router.config([{ path: '/', redirectTo: '/main' }, { path: '/main', component: 'main' }, { path: '/contacts', component: 'contacts' }]);
    };

    exports.ApplicationController = ApplicationController;
});
define('components/contacts/contacts', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var ContactsController = (function () {
        function ContactsController(UserService) {
            _classCallCheck(this, ContactsController);

            console.log('ContactsController constructor');
            console.log(UserService);
            this.myDataOnScope = 'Hello Ionic!!';
            this.UserService = UserService;
        }

        _createClass(ContactsController, [{
            key: 'sayHello',
            value: function sayHello() {
                console.log('say it!');
                this.UserService.sayHello('Hello');
            }
        }]);

        return ContactsController;
    })();

    ContactsController.$inject = ['userService'];
    exports.ContactsController = ContactsController;
});
define('components/login/login', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var LoginController = function LoginController() {
        _classCallCheck(this, LoginController);

        console.log('LoginController constructor');

        this.myDataOnScope = 'Hello Ionic login!!';
    };

    exports.LoginController = LoginController;
});
define('components/main/main', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var MainController = function MainController() {
        _classCallCheck(this, MainController);

        console.log('MainController constructor');

        this.myDataOnScope = 'Hello Ionic!!';
    };

    exports.MainController = MainController;
});
define('app', ['exports', './bootstrap', './configuration', './components/main/main', './components/contacts/contacts', './components/application/application', './services/notificationservice', './services/userservice'], function (exports, _bootstrap, _configuration, _componentsMainMain, _componentsContactsContacts, _componentsApplicationApplication, _servicesNotificationservice, _servicesUserservice) {
    // Ionic Starter App

    //Config
    'use strict';

    var UserServiceInstance = _servicesUserservice.UserService.factory;
    var NotificationServiceInstance = _servicesNotificationservice.NotificationService.factory;

    angular.module('myApp', ['ionic', 'myApp.controllers', 'myApp.services', 'ngNewRouter']).config(_configuration.configuration).run(_bootstrap.onReady);

    angular.module('myApp.services', []).factory('UserService', ['$http', UserServiceInstance]).factory('NotificationService', ['$http', NotificationServiceInstance]);

    angular.module('myApp.controllers', []).controller('MainController', [_componentsMainMain.MainController]).controller('ContactsController', ['UserService', _componentsContactsContacts.ContactsController]).controller('ApplicationController', ['$router', _componentsApplicationApplication.ApplicationController]);
});

//Controller

//Services
//# sourceMappingURL=all.js.map