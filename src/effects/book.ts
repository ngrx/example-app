import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMapTo';
import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Database } from '@ngrx/db';

import { AppState } from '../reducers';
import { GoogleBooksService, Book } from '../services/google-books';
import { BookActions } from '../actions/book';


@Injectable()
export class BookEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private googleBooks: GoogleBooksService,
    private db: Database,
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

  // @Effect() addBookToCollection$ = this.updates$
  //   .whenAction(BookActions.ADD_TO_COLLECTION)
  //   .map<Book>(toPayload)
  //   .mergeMap(book => this.db.insert('books', [ book ]))
  //   .filter(() => false);
  //
  // @Effect() loadCollection$ = this.updates$
  //   .whenAction(BookActions.LOAD_COLLECTION)
  //   .switchMapTo(this.db.query('books'))
  //   .map((books: Book[]) => this.bookActions.loadCollectionSuccess(books));
}
