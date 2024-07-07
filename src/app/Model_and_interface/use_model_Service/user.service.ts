import { Injectable } from '@angular/core';
import {data_type}from "../model"

// you can use this way as well and in exterfile for your model also 
// interface data_type{
//   name: string,
//   age: number,
//   Indian: boolean,
//   address:any
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
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
