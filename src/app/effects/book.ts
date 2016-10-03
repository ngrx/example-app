import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { GoogleBooksService } from '../services/google-books';
import * as book from '../actions/book';
import * as fromRoot from '../reducers';


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
    private store: Store<fromRoot.State>,
    private googleBooks: GoogleBooksService) { }


  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(book.ActionTypes.SEARCH)
    .debounceTime(300)
    .map<string>(action => action.payload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(book.ActionTypes.SEARCH).skip(1);

      return this.googleBooks.searchBooks(query)
        .takeUntil(nextSearch$)
        .map(books => new book.SearchCompleteAction(books))
        .catch(() => of(new book.SearchCompleteAction([])));
    });

  @Effect()
  loadBook$: Observable<Action> = this.actions$
    .ofType(book.ActionTypes.LOAD)
    .withLatestFrom(this.store.let(fromRoot.isBookLoading))
    .filter(([ action, bookLoading ]) => bookLoading)
    .switchMap(([ action ]) =>
      this.googleBooks.retrieveBook(action.payload)
        .map(bookInstance => new book.LoadSuccessAction(bookInstance))
        .catch(err => of(new book.LoadFailAction(err)))
    );
}
