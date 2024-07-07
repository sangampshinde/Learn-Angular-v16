import { Component } from '@angular/core';

interface data_type{
  name: string,
  age: number,
  Indian: boolean,
  address:any
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  get_data(){
    const data:data_type ={
      name: "John Doe",
      age: 30,
      Indian: true,
      address:" 43 noida UP"
    }

    return data;

  }

}
