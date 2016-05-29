import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getSearchResults, getSearchQuery } from '../reducers';
import { BookActions } from '../actions';
import { BookSearchComponent, QueryInput, SearchOutput } from '../components/book-search';
import {BookPreviewListComponent, BooksInput, SelectOutput } from '../components/book-preview-list';


@Component({
  selector: 'book-add-page',
  directives: [ BookSearchComponent, BookPreviewListComponent ],
  template: `
    <h2>Add a book!</h2>
    <book-search [query]="searchQuery$ | async" (search)="search($event)"></book-search>
    <book-preview-list [books]="books$ | async" (select)="selectBook($event)"></book-preview-list>
  `
})
export class BookAddPage {
  searchQuery$: Observable<QueryInput>;
  books$: Observable<BooksInput>;

  constructor(private store: Store<AppState>, private bookActions: BookActions) {
    this.searchQuery$ = store.let(getSearchQuery());
    this.books$ = store.let(getSearchResults());
  }

  search(query: SearchOutput) {
    this.store.dispatch(this.bookActions.search(query));
  }

  selectBook(book: SelectOutput) {
    this.store.dispatch(this.bookActions.addToCollection(book));
  }
}
