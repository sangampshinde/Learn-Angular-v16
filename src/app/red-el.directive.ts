import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color='red';
   }

}

// steps to craeate the Custom Directive

// 1. type Command 'ng g directive <directive name>'
// 2. two files created spects and your custom directive file 
// Note: if you want to create a custom directive in folder then open terminal in that folder and run the above command.
// el.nativeElement.style you wamt to put.
