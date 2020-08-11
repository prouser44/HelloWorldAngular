import { Component } from '@angular/core'
@Component({
    selector: 'app-server', //A selector must be a unique string. This points to the component folder. Can now use this component in other component's HTML
    templateUrl: './server.component.html' //html to be used for the server component
    
})
export class ServerComponent { //create class variables here 
    serverId: number = 10; //in typescript, add data type with a colen then the type
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'; //using property binding on ngStle. ngStyle attribute directive allows dynamic css
    }
}