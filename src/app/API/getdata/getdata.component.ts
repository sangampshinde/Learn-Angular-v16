import { Component } from '@angular/core';
import { ApiDataService } from '../Services_for _get_data/api-data.service';


@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent {

  heros: any;

  constructor(private herodata:ApiDataService)
  {
    herodata.user().subscribe((hero)=>{
      this.heros = hero;
      console.log(this.heros);
    })
  }


}
