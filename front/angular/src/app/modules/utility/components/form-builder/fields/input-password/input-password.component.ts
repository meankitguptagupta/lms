import { Component, OnInit, Input } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  constructor() { }

  @Input() field:FormFields;
  @Input() form:FormGroup;

  ngOnInit() {
  }

  toggleType(e:any) {
    let field = e.currentTarget.parentNode.querySelector('input');

    if(field.type === 'password') {
      field.type = 'text';
      e.currentTarget.querySelector('.fa').classList.add('fa-eye-slash');
      e.currentTarget.querySelector('.fa').classList.remove('fa-eye');
      return;
    }
      
    field.type = 'password';
    e.currentTarget.querySelector('.fa').classList.add('fa-eye');
    e.currentTarget.querySelector('.fa').classList.remove('fa-eye-slash');      
  }

}
