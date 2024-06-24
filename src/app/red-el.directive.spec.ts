import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el: ElementRef) {
    // Access the host element using el.nativeElement
    el.nativeElement.style.backgroundColor = 'red';
  }

}