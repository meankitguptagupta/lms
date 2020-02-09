import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { BookFields } from 'src/app/form-definitions/book-fields';
import { FormButton } from 'src/app/models/formButton';
import { APIResponse } from 'src/app/models/forms/api-response';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readonly title:string = 'create books';

  spinnerStatus:boolean = false;

  getFields():Array<FormBase> {
    return BookFields;
  }

  getButton():FormButton {
    return {
      button: {
        label: 'create'
      }
    };
  }

  submit(values):void {
    this.spinnerStatus = true;
    
  }

}
