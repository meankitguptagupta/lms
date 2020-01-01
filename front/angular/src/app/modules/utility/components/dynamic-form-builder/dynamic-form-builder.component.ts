import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormFields } from '../../../../models/form-fields';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent implements OnInit {

  constructor() { }

  @Input() fields:FormFields[] = [];
  @Input() spinnerStatus:boolean;
  @Output() submit:EventEmitter<any> = new EventEmitter<any>();

  form:FormGroup;

  ngOnInit() {
    // field to add all form fields
    let fieldCtrls = {};

    // generate form-control options
    for(let f of this.fields) {
      if(f.type === 'button')
        continue;
        
      fieldCtrls[f.name] = new FormControl(f.value, f.validators);
    }

    this.form = new FormGroup(fieldCtrls);
  }

  submitForm(event:Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

}
