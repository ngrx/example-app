import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { SearchBooksAction } from '../actions/book';
import { QueryInput, SearchOutput } from '../components/book-search';
import { BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'bc-find-book-page',
  template: `
    <bc-book-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></bc-book-search>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `
})
export class FindBookPageComponent {
  searchQuery$: Observable<QueryInput>;
  books$: Observable<BooksInput>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `let` operator which passes the source
     * observable to the provided function.
     *
     * More on `let`: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
     * More on selectors: https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
     */
    this.searchQuery$ = store.let(fromRoot.getSearchQuery).take(1);
    this.books$ = store.let(fromRoot.getSearchResults);
    this.loading$ = store.let(fromRoot.getSearchLoading);
  }

  search(query: SearchOutput) {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our 
     * application.
     */
    this.store.dispatch(new SearchBooksAction(query));
  }
}
