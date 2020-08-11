import { Component } from '@angular/core';

@Component({  //this is the component that app root on index.html references. So below, the html, css, and typescript(ts) are refrenced
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
}
