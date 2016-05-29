import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getSearchResults, getSearchQuery } from '../reducers';
import { BookActions } from '../actions';
import { BookSearchComponent, QueryInput, SearchOutput } from '../components/book-search';
import { BookPreviewListComponent, BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'book-find-page',
  directives: [ BookSearchComponent, BookPreviewListComponent ],
  template: `
    <h2>Find a Book</h2>
    <book-search [query]="searchQuery$ | async" (search)="search($event)"></book-search>
    <book-preview-list [books]="books$ | async"></book-preview-list>
  `
})
export class BookFindPage {
  searchQuery$: Observable<QueryInput>;
  books$: Observable<BooksInput>;

  constructor(private store: Store<AppState>, private bookActions: BookActions) {
    this.searchQuery$ = store.let(getSearchQuery());
    this.books$ = store.let(getSearchResults());
  }

  search(query: SearchOutput) {
    this.store.dispatch(this.bookActions.search(query));
  }
}
