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
  public searchQuery$: Observable<string>;
  public books$: Observable<Book[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.let(fromRoot.getSearchQuery).take(1);
    this.books$ = store.let(fromRoot.getSearchResults);
    this.loading$ = store.let(fromRoot.getSearchLoading);
  }

  public search(query: string) {
    this.store.dispatch(new book.SearchAction(query));
  }
}
