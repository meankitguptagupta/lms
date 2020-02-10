import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { BookFields } from 'src/app/form-definitions/book-fields';
import { FormButton } from 'src/app/models/formButton';
import { APIResponse } from 'src/app/models/forms/api-response';
import { BookService } from 'src/app/services/books/book.service';
import { tap } from 'rxjs/operators';
import { Button } from 'src/app/form-definitions/button';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _book:BookService) { }

  genres:Array<string> = [];
  academyTypes:Array<string> = [];

  ngOnInit() {
    this.getGenres();
    this.getGraduationTypes();
  }

  getGenres():void {
    this._book.generes().subscribe(res => {
      this.genres = Object.values(res.data);
    });
  }

  getGraduationTypes():void {
    this._book.academyTypes().subscribe(res => {
      this.academyTypes = Object.values(res.data);
    });
  }

  readonly title:string = 'create books';

  spinnerStatus:boolean = false;

  getFields():Array<FormBase> {
    return BookFields(this.genres, this.academyTypes);
  }

  getButton():FormButton {
    return Button
  }

  submit(values):void {
    this.spinnerStatus = true;    
  }

}
