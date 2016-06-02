import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getSearchResults, getSearchQuery } from '../reducers';
import { BookActions } from '../actions';
import { BookSearchComponent, QueryInput, SearchOutput } from '../components/book-search';
import { BookPreviewListComponent, BooksInput } from '../components/book-preview-list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';


@Component({
  selector: 'book-find-page',
  directives: [
    BookSearchComponent,
    BookPreviewListComponent,
    MD_CARD_DIRECTIVES
  ],
  template: `
    <md-card>
      <md-card-title>Find a Book</md-card-title>
      <md-card-content>
      <book-search [query]="searchQuery$ | async" (search)="search($event)"></book-search>
      </md-card-content>
    </md-card>
    <book-preview-list [books]="books$ | async"></book-preview-list>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }
  `]
})
export class BookFindPage {
  searchQuery$: Observable<QueryInput>;
  books$: Observable<BooksInput>;

  constructor(private store: Store<AppState>, private bookActions: BookActions) {
    /**
     * Selectors can be applied with the `let` operator, which passes the source
     * observable to the provided function. This allows us an expressive,
     * composable technique for creating view projections.
     *
     * More on `let`: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
     * More on selectors: https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
     */
    this.searchQuery$ = store.let(getSearchQuery()).take(1);
    this.books$ = store.let(getSearchResults());
  }

  search(query: SearchOutput) {
    /**
     * All state updates are handled through dispatched actions in 'smart'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our application.
     */
    this.store.dispatch(this.bookActions.search(query));
  }
}
