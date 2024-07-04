import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return [
      {name: 'John Doe', age: 30, email: 'john@gmail.com'},
      {name: 'Jane Doe', age: 25 ,email: 'jane@gmail.com'},
      {name: 'Mike Doe', age: 35 ,email: 'mike@gmail.com'}
    ];
  }
}
