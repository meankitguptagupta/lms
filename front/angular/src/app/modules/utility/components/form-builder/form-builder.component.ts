import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields } from '../../../../models/form-fields';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }

  @Input() field:FormFields;
  @Input() form:FormGroup;
  @Input() spinnerStatus:boolean;

  ngOnInit() { }

}
