import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  readonly title:string = 'create book';

  fields:FormArray;
  bookForm:FormGroup;

  ngOnInit() {
    this.bookForm = new FormGroup({
      tag_id: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      title: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      genere: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      is_premium: new FormControl(null, [Validators.nullValidator]),
      academy_type: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      academy_standard: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
      fields: this._fb.array([])
    })

    this.fields = this.bookForm.get('fields') as FormArray;
  }

  addremoveFields(i):void {
    if (this.islastFields(i)) {
      this.fields.push(this.createItem());
    } else {
      this.fields.removeAt(i);
    }
  }

  islastFields (i:number):boolean {
    return (this.fields.length-1) === i;
  }

  createItem(key:string = null, value:string = null) {
    return this._fb.group({
      key: new FormControl(key, [Validators.required, Validators.maxLength(20)]),
      value: new FormControl(value, [Validators.required, Validators.maxLength(255)])
    });
  }

}
