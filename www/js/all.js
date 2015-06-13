define("bootstrap", ["exports"], function (exports) {
    "use strict";

    exports.onReady = onReady;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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
define("configuration", ["exports"], function (exports) {
    "use strict";

    exports.configuration = configuration;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function configuration($componentLoaderProvider, $ionicConfigProvider) {

        $ionicConfigProvider.tabs.position("bottom");

        $componentLoaderProvider.setTemplateMapping(function (name) {
            return "templates/" + name + "/" + name + ".html";
        });

        $componentLoaderProvider.setCtrlNameMapping(function (name) {
            var controllerName = "";
            if (name.indexOf("/") !== -1) {
                var part = name.split("/");
                controllerName = part[1][0].toUpperCase() + part[1].substr(1) + "Controller";
                //console.log(controllerName);
                return controllerName;
            } else {
                controllerName = name[0].toUpperCase() + name.substr(1) + "Controller";
                //console.log(controllerName);
                return controllerName;
            }
        });
    }
});
define("services/notificationservice", ["exports"], function (exports) {
    "use strict";

    exports.NotificationService = NotificationService;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    "use strict";

    function NotificationService($http) {

        return {};
    }
});
define("services/userservice", ["exports"], function (exports) {
    "use strict";

    exports.UserService = UserService;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    "use strict";

    function UserService($http) {

        var bIsLoggedIn = false;
        var user = {};

        var sayHello = function sayHello(pMessage) {
            alert("Caller says: " + pMessage);
        };

        var getUser = function getUser() {
            return user;
        };

        var setUser = function setUser(pUser) {
            user = pUser;
        };

        var isLoggedIn = function isLoggedIn() {
            return bIsLoggedIn === true;
        };

        var login = function login(pCredentials) {
            return new Promise(function (resolve, reject) {
                bIsLoggedIn = true;
                resolve();
            });
        };

        var logout = function logout() {
            bIsLoggedIn = false;
        };

        return {
            sayHello: sayHello,
            getUser: getUser,
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout
        };
    }
});
define("components/application/application", ["exports", "module"], function (exports, module) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    var ApplicationController = function ApplicationController($router) {
        _classCallCheck(this, ApplicationController);

        console.log("ApplicationController constructor");
        $router.config([{ path: "/", redirectTo: "/main" }, { path: "/main", component: "main" }, { path: "/contacts", component: "contacts" }]);
    };

    module.exports = { ApplicationController: ApplicationController };
});
define("components/contacts/contacts", ["exports", "module"], function (exports, module) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    var ContactsController = (function () {
        function ContactsController(userservice) {
            _classCallCheck(this, ContactsController);

            console.log("ContactsController constructor");
            this.myDataOnScope = "Hello Ionic!!";
            this.UserService = userservice;
        }

        _createClass(ContactsController, {
            sayHello: {
                value: function sayHello() {
                    this.UserService.sayHello("Hello");
                }
            }
        });

        return ContactsController;
    })();

    module.exports = { ContactsController: ContactsController };
});
define("components/login/login", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var LoginController = exports.LoginController = function LoginController() {
        _classCallCheck(this, LoginController);

        console.log("LoginController constructor");

        this.myDataOnScope = "Hello Ionic login!!";
    };
});
define("components/main/main", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var MainController = exports.MainController = function MainController() {
        _classCallCheck(this, MainController);

        console.log("MainController constructor");

        this.myDataOnScope = "Hello Ionic!!";
    };
});
define("app", ["exports", "./bootstrap", "./configuration", "./components/main/main", "./components/contacts/contacts", "./components/application/application", "./services/notificationservice", "./services/userservice"], function (exports, _bootstrap, _configuration, _componentsMainMain, _componentsContactsContacts, _componentsApplicationApplication, _servicesNotificationservice, _servicesUserservice) {
    // Ionic Starter App

    //Config
    "use strict";

    var onReady = _bootstrap.onReady;
    var configuration = _configuration.configuration;

    //Controller
    var MainController = _componentsMainMain.MainController;
    var ContactsController = _componentsContactsContacts.ContactsController;
    var ApplicationController = _componentsApplicationApplication.ApplicationController;

    //Services
    var NotificationService = _servicesNotificationservice.NotificationService;
    var UserService = _servicesUserservice.UserService;

    angular.module("myApp", ["ionic", "ngNewRouter"]).factory("userService", UserService).factory("notificationService", NotificationService).controller("ApplicationController", ["$router", ApplicationController]).controller("MainController", [MainController]).controller("ContactsController", ["userService", ContactsController]).config(configuration).run(onReady);
});
//# sourceMappingURL=all.js.map