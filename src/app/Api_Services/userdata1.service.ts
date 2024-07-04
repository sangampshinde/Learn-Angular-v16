import { Injectable } from '@angular/core';
// to import data from api we need to import http-client
import{ HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserdataService1 {

   url='http://localhost:2000/users'

  constructor(private http:HttpClient){

    
   }

   user(){
    // normal api call
    return this.http.get(this.url);
   }
}
