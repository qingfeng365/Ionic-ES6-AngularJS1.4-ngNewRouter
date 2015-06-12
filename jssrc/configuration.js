export function configuration($componentLoaderProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

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
