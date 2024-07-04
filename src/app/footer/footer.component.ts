import { Component } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users:any;

  // constructor function to get data from services
  constructor(private userdata:UserdataService){
    console.log('userdata:',userdata.users());
    this.users = userdata.users();

  }
  
}
