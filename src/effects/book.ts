import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { Database } from '@ngrx/db';

import { GoogleBooksService } from '../services/google-books';
import { BookActionTypes, SearchBooksCompleteAction } from '../actions/book';
import * as collection from '../actions/collection';
import { Book } from '../models/book';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService,
    private db: Database
  ) { }


  @Effect({ dispatch: false }) openDB$ = this.db.open('books_app');


  @Effect() loadCollection$ = this.actions$
    .ofType(collection.CollectionActionTypes.LOAD_COLLECTION)
    // This will cause the effect to run once immediately on startup
    .startWith(new collection.LoadCollectionAction())
    .switchMap(() => this.db.query('books').toArray())
    .map((books: Book[]) => new collection.LoadCollectionSuccessAction(books));


  @Effect() search$ = this.actions$
    .ofType(BookActionTypes.SEARCH)
    .debounceTime(300)
    .map<string>(action => action.payload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(BookActionTypes.SEARCH).skip(1);

      return this.googleBooks.searchBooks(query)
        .takeUntil(nextSearch$)
        .map(books => new SearchBooksCompleteAction(books))
        .catch(() => Observable.of(new SearchBooksCompleteAction([])))
    });


  @Effect() addBookToCollection$ = this.actions$
    .ofType(collection.CollectionActionTypes.ADD_BOOK)
    .map<Book>(action => action.payload)
    .mergeMap(book => this.db.insert('books', [ book ])
      .map(() => new collection.AddBookSuccessAction(book))
      .catch(() => Observable.of(
        new collection.AddBookFailAction(book)
      ))
    );


  @Effect() removeBookFromCollection$ = this.actions$
    .ofType(collection.CollectionActionTypes.REMOVE_BOOK)
    .map<Book>(action => action.payload)
    .mergeMap(book => this.db.executeWrite('books', 'delete', [ book.id ])
      .map(() => new collection.RemoveBookSuccessAction(book))
      .catch(() => Observable.of(
        new collection.RemoveBookFailAction(book)
      ))
    );
}
