export class MainController {
    constructor() {
        console.log('MainController constructor');

        this.myDataOnScope = 'Hello Ionic!!';
    }

    canActivate(){
        console.log('can activate');
        return true;
    }

    activate(){
        console.log('activate');
        return true;
    }

    canDeactivate(){
        console.log('canDeactivate');
        return true;
    }

    deactivate(){
        console.log('deactivate');
        return true;
    }
}
