import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { Book } from 'src/app/models/definations/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _book:BookService) { }

  list:Array<any> = [];

  // limit:number;
  // page:number;
  // total:number;

  ngOnInit() {
    this.getList()
  }

  getList () {
    this._book.list().subscribe(res => {
      console.log(res.data)
      // this.list = res.data;
      // this.limit = res.data.limit;
      // this.page = res.data.page;
      // this.total = res.data.total;
    })
  }

}
