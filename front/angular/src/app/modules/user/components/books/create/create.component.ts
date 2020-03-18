import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormButton } from 'src/app/models/form-button';
import { Book as BookFields } from 'src/app/forms/book';
import { PublicService } from 'src/app/services/public/public.service';
import { APIResponse } from 'src/app/models/api-response';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { selectOptionCasting } from 'src/app/helpers/select-option-cast';
import { SelectOption } from 'src/app/models/definations/select-option';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  button:FormButton = {label: 'create', status: false, align: 'right'};
  
  constructor(private _public:PublicService) { }

  fields:FormBase[];

  ngOnInit() {
    this.setFields();
  }

  getFieldDependencies() {
    return forkJoin([
      this.getGenere(),
      this.getAcademyType()
    ])
  }

  setFields():void {
    this.getFieldDependencies().subscribe(data => {
      this.fields = BookFields(data[0], data[1])
    });
  }

  getAcademyType():Observable<SelectOption[]> {
    return this._public.academyTypes().pipe(map((res:APIResponse) => {
      return selectOptionCasting(Object.values(res.data));
    }))
  }

  getGenere():Observable<SelectOption[]> {
    return this._public.genere().pipe(map((res:APIResponse) => {
      return selectOptionCasting(Object.values(res.data));
    }))
  }

  getFields():FormBase[]{
    return this.fields;
  }

  submit(values):void {
    console.log(values)
  }

}
