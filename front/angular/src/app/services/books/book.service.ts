import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';
import { Book } from 'src/app/models/definations/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http:HttpClient) { }

  store(book:Book):Observable<APIResponse> {
    return this._http.post<APIResponse>('books', book);
  }

  list():Observable<APIResponse> {
    return this._http.get<APIResponse>('books');
  }
}
