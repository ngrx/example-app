import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Control } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { AppState, getSearchResults, getSearchQuery } from '../reducers';
import { BookActions } from '../actions';
import { BookSearchComponent, QueryInput, SearchOutput } from '../components/book-search';
import { BookPreviewListComponent, BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'book-add-page',
  directives: [ BookSearchComponent, BookPreviewListComponent ],
  template: `
    <h2>Add a book!</h2>
    <div>
      <book-search [query]="searchQuery$ | async" (search)="search($event)"></book-search>
    </div>
    <book-preview-list [books]="books$ | async"></book-preview-list>
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
}
