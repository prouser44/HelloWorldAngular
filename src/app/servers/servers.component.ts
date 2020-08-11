import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = ''; //onUpdateServeName overrides this
  serverCreated = false; //for use with ngIF
  servers = ['Testserver', 'Testserver 2'];

  constructor() {  //constructor calls this method when the class is built first. 
    //setTimeout() is a built in function. Sets a timeout on the allowServer bool, with 2 seconds. AllowNewServer button is disabled in the HTML via propery binding
    setTimeout(() => {   //ES6 arrow function. Handles "this" keyword to point towards class variable "allowNewServer"
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {
  }
 
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Server Name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value; //cast HTMLInput onto a string

  }
}
