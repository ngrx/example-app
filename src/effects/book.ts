import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Database } from '@ngrx/db';

import { AppState } from '../reducers';
import { GoogleBooksService } from '../services/google-books';
import { BookActions } from '../actions/book';
import { Book } from '../models';


@Injectable()
export class BookEffects {
  constructor(
    private updates$: StateUpdates<AppState>,
    private googleBooks: GoogleBooksService,
    private db: Database,
    private bookActions: BookActions
  ) {
    db.open('books_app').subscribe();
  }

  @Effect() loadCollectionOnInit$ = Observable.of(this.bookActions.loadCollection());

  @Effect() loadCollection$ = this.updates$
    .whenAction(BookActions.LOAD_COLLECTION)
    .switchMapTo(this.db.query('books').toArray())
    .map((books: Book[]) => this.bookActions.loadCollectionSuccess(books));

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

  @Effect() addBookToCollection$ = this.updates$
    .whenAction(BookActions.ADD_TO_COLLECTION)
    .map<Book>(toPayload)
    .mergeMap(book => this.db.insert('books', [ book ])
      .mapTo(this.bookActions.addToCollectionSuccess(book))
      .catch(() => Observable.of(
        this.bookActions.removeFromCollectionFail(book)
      ))
    )
    .filter(() => false);

  @Effect() removeBookFromCollection$ = this.updates$
    .whenAction(BookActions.REMOVE_FROM_COLLECTION)
    .map<Book>(toPayload)
    .mergeMap(book => this.db.executeWrite('books', 'delete', [ book ])
      .mapTo(this.bookActions.removeFromCollectionSuccess(book))
      .catch(() => Observable.of(
        this.bookActions.removeFromCollectionFail(book)
      ))
    )
    .filter(() => false);
}
