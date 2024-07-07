import { Component } from '@angular/core';
import { SendDataService } from '../Service_for_send_data/send-data.service';

@Component({
  selector: 'app-senddata',
  templateUrl: './senddata.component.html',
  styleUrls: ['./senddata.component.css']
})
export class SenddataComponent {
  constructor(private senddata: SendDataService) { }

  user_form_data(data: any) {
    console.log(data);
    this.senddata.sendData(data).subscribe((data)=>{
      console.log('Data sent successfully', data);
    }); // Send data to the service

  }
 
}
