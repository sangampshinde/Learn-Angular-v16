import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  url="http://localhost:8000/heros";

  constructor(private http:HttpClient) { }
  sendData(data:any)
  {
    return this.http.post(this.url, data);
  }

}
