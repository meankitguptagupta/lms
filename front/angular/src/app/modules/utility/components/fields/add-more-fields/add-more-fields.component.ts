import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-more-fields',
  templateUrl: './add-more-fields.component.html',
  styleUrls: ['./add-more-fields.component.css']
})
export class AddMoreFieldsComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  @Input() field:FormBase;
  @Input() form:FormGroup;
  fields:FormArray;

  ngOnInit() {
    this.form.controls[this.field.name] = this._fb.array([]);
    this.fields = this.form.get(this.field.name) as FormArray;
    this.fields.push(this.createItem());
  }

  addremoveFields(i):void {
    if (this.islastFields(i)) {
      this.fields.push(this.createItem());
    } else {
      this.fields.removeAt(i);
    }
  }

  createItem(key:string = null, value:string = null) {
    return this._fb.group({
      key: new FormControl(key, [Validators.required, Validators.maxLength(20)]),
      value: new FormControl(value, [Validators.required, Validators.maxLength(255)])
    });
  }

  islastFields (i:number):boolean {
    return (this.fields.length-1) === i;
  }

}
