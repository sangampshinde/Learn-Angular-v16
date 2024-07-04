import { Component } from '@angular/core';
import { UserdataService1 } from '../../userdata1.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  user:any;
  constructor(private userdata:UserdataService1){

    // to get data from api we nned to subscribe to service wich is callbback function
    userdata.user().subscribe((data)=>{
      this.user = data;
      console.log('user:',this.user);  // print the user data in console
    })


  }

}
