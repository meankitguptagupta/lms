import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() field:FormBase;
  @Input() form:FormGroup;

  constructor() { }

  ngOnInit() {}

}
