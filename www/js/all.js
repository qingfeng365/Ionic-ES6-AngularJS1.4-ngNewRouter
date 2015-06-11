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

	function configuration($componentLoaderProvider) {

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
define("components/application/application", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var ApplicationController = exports.ApplicationController = function ApplicationController($router) {
        _classCallCheck(this, ApplicationController);

        console.log("ApplicationController constructor");
        $router.config([{ path: "/", redirectTo: "/main" }, { path: "/main", component: "main" }, { path: "/contacts", component: "contacts" }]);
    };
});
define("components/contacts/contacts", ["exports"], function (exports) {
    "use strict";

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var ContactsController = exports.ContactsController = function ContactsController() {
        _classCallCheck(this, ContactsController);

        console.log("ContactsController constructor");

        this.myDataOnScope = "Hello Ionic!!";
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
define("app", ["exports", "bootstrap", "configuration", "components/main/main", "components/contacts/contacts", "components/application/application"], function (exports, _bootstrap, _configuration, _componentsMainMain, _componentsContactsContacts, _componentsApplicationApplication) {
    // Ionic Starter App

    "use strict";

    var onReady = _bootstrap.onReady;
    var configuration = _configuration.configuration;
    var MainController = _componentsMainMain.MainController;
    var ContactsController = _componentsContactsContacts.ContactsController;
    var ApplicationController = _componentsApplicationApplication.ApplicationController;

    angular.module("myApp", ["ionic", "myApp.controllers", "ngNewRouter"]).config(configuration).run(onReady);

    angular.module("myApp.controllers", []).controller("MainController", MainController).controller("ContactsController", ContactsController).controller("ApplicationController", ["$router", ApplicationController]);

    //angular.module('myApp.services', [])
    //.service('Chats', Chats);
});
//# sourceMappingURL=all.js.map