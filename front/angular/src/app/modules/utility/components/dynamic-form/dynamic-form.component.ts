import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup, FormControl } from '@angular/forms';
import { FormButton } from 'src/app/models/form-button';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }

  @Input() fields:Array<FormBase>;
  @Input() button:FormButton = {
    label: 'submit',
    status: false,
    align: 'block'
  };
  
  @Output() submitResp:EventEmitter<any> = new EventEmitter();
  form:FormGroup;
  hasDupField:boolean = false;

  ngOnInit() {
    let formFields = {};

    for (let field of this.fields) {
      formFields[field.name] = new FormControl(field.value, field.validators);

      // check if add-more field exists
      if (field.type === 'fields') {
        this.hasDupField = true;
      }
    }

    this.form = new FormGroup(formFields);
  }

  submit() {
    if(this.form.valid) {
      this.submitResp.emit(this.form.value);
    }
  }

  getButtonAlign(align:string):string {
    switch(align) {
      case 'right':
        return 'pull-right';
      case 'left':
        return 'pull-left';
    }

    return 'btn-block';
  }

}
