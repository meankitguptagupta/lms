import { Component, OnInit, Input } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() field:FormFields;
  @Input() form:FormGroup;

  @Input() spinnerStatus:boolean = false;

  ngOnInit() {
  }

}
