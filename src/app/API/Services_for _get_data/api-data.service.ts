import { Injectable } from '@angular/core';

//to call api we need to import http module
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url='http://localhost:8000/heros';

   constructor(private http:HttpClient) { };

   user(){
    return this.http.get(this.url);
   }


   saveUser(data:any){
    return this.http.post(this.url,data); 

   }
}
