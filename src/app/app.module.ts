import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms' //typescript needs to know where component is from using *what* library

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({  //this is the angular module. It's seperate from the typescipt dependancies above
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //add here to use from the above import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
