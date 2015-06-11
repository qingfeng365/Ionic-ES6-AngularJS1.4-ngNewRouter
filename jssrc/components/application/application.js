class ApplicationController {
    constructor($router) {
        console.log('ApplicationController constructor');
        $router.config([
            {path: '/', redirectTo: '/main'},
            {path: '/main', component: 'main'},
            {path: '/contacts', component: 'contacts'}
        ]);
    }
}

export {ApplicationController}