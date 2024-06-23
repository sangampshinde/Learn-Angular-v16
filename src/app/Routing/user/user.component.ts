import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private route:ActivatedRoute){
   
  }
  ngOninit():void{
    console.log('user id is :', this.route.snapshot.paramMap.get('id'));

  }

  // 6.00
 
}
