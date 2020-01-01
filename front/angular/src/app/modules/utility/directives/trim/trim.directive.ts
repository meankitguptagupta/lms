import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor() { }

  @Input() TrimField:boolean; 

  /**
   * Remove whitespace on focus out
   * @param event 
   */
  @HostListener ('blur', ['$event']) onblur (event) {
    event.target.value = event.target.value.trim();
  }
}
