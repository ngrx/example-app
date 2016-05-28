
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';
import { GoogleBooksService, Book } from '../services/google-books';
import { BookActions } from '../actions/book';


@Injectable()
export class BookEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private googleBooks: GoogleBooksService,
    private bookActions: BookActions
  ) { }

  @Effect() search$ = this.updates$
    .whenAction(BookActions.SEARCH)
    .map<string>(toPayload)
    .filter(query => query !== '')
    .switchMap(query => this.googleBooks.searchBooks(query)
      .map(books => this.bookActions.searchComplete(books))
      .catch(() => Observable.of(this.bookActions.searchComplete([])))
    );

  @Effect() clearSearch$ = this.updates$
    .whenAction(BookActions.SEARCH)
    .map<string>(toPayload)
    .filter(query => query === '')
    .mapTo(this.bookActions.searchComplete([]));
}
