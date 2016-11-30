import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as book from '../actions/book';
import { Book } from '../models/book';


@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></bc-book-search>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    this.books$ = store.select(fromRoot.getSearchResults);
    this.loading$ = store.select(fromRoot.getSearchLoading);
  }

  search(query: string) {
    this.store.dispatch(new book.SearchAction(query));
  }
}
