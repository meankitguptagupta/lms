import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  @Input() field:FormBase;
  @Input() form:FormGroup;
  status:number = 0;

  ngOnInit() {
  }

}
