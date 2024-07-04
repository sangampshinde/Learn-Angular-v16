import { Component } from '@angular/core';
import { UserdataService } from './Services/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  users:any;

  // constructor function to get data from services
  constructor(private userdata:UserdataService){
    console.log('userdata:',userdata.users());
    this.users = userdata.users();

  }
 
}
 