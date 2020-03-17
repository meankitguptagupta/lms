import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() field:FormBase;
  @Input() form:FormGroup;

  ngOnInit() {
  }

}
