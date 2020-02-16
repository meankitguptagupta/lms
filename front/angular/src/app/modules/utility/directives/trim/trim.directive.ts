import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor() { }

  @HostListener ('blur', ['$event']) onblur (event) {
    event.target.value = event.target.value.trim();
  }

}
