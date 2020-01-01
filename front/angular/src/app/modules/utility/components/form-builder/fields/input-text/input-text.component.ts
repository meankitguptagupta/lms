import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields } from '../../../../../../models/form-fields';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  constructor() { }

  @Input() field:FormFields;
  @Input() form:FormGroup;

  ngOnInit() { }

}
