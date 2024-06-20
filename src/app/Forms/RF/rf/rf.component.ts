import { Component } from '@angular/core';
// need to import formGroup and formControl from '@angular/forms
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent {
  // here FormGroup => entire form and FormControl => field control
  // loginForm => is form name we can put it whatever we want to.
  loginForm = new FormGroup({
    // to set by default vlaue  for input fields put the value here
    user: new FormControl(''),
    password: new FormControl('')
  });

  Userlogin(){
    console.log(this.loginForm.value);
  }

  
}
