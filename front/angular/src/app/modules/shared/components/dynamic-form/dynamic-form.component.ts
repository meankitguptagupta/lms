import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup, FormControl } from '@angular/forms';
import { FormButton } from 'src/app/models/formButton';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields:Array<FormBase>;
  @Input() spinnerStatus:boolean;
  @Input() button:FormButton;
  @Output() formResponse:EventEmitter<any> = new EventEmitter();

  form:FormGroup;

  constructor() { }

  ngOnInit() {
    let formFields = {};

    for (let f of this.fields) {
      formFields[f.name] = new FormControl(f.value, f.validators);
    }

    this.form = new FormGroup(formFields);
  }

  submit() {
    if(this.form.valid) {
      this.formResponse.emit(this.form.value);
    }
  }

}
