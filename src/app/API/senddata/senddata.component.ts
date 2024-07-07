import { Component } from '@angular/core';

@Component({
  selector: 'app-senddata',
  templateUrl: './senddata.component.html',
  styleUrls: ['./senddata.component.css']
})
export class SenddataComponent {

  user_form_data(data: any) {
    console.log(data);

  }
 
}
