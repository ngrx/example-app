import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models';

@Injectable()
export class GoogleBooksService {

  private API_PATH: string = 'https://www.googleapis.com/books/v1';

  constructor(private http: Http) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}/volumes?q=${queryTitle}`)
      .map(res => res.json())
      .map(({ items }) => items);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/volumes/${volumeId}`)
      .map(res => res.json());
  }
}
