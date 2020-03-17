import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  @Input() field:FormBase;
  @Input() form:FormGroup;

  ngOnInit() {
  }

  togglePWD(e):void {
    let target = e.currentTarget,
      ele = target.querySelector('i.fa'),
      icons:Array<string> = Array.from(ele.classList),
      input = target.parentNode.querySelector('input');
    
    if (icons.includes('fa-eye')) {
      ele.classList.remove('fa-eye');
      ele.classList.add('fa-eye-slash');
      input.type = 'text';
      return;
    }

    ele.classList.remove('fa-eye-slash');
    ele.classList.add('fa-eye');
    input.type = 'password';
  }

}
