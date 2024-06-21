import { Component } from '@angular/core';
// for validation you need to import validators
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfv',
  templateUrl: './rfv.component.html',
  styleUrls: ['./rfv.component.css']
})
export class RfvComponent {
 
  loginForm = new FormGroup({
// your form control second parameter is validators
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });


  Userlogin(){
    console.log(this.loginForm.value);
  }


get user(){
 return this.loginForm.get('user');
}

get password(){
  return this.loginForm.get('password');
 }



}
