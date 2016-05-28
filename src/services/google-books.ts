import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
  };
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  };
}

@Injectable()
export class GoogleBooksService {

  private API_PATH: string = 'https://www.googleapis.com/books/v1';

  constructor(private http: Http) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}/volumes?q=${queryTitle}`)
      .map(res => res.json())
      .map(({ items }) => items);
  }

  retrieveBook(volumeId: string): Observable<Response> {
    return this.http.get(`${this.API_PATH}/volumes/${volumeId}`);
  }
}
