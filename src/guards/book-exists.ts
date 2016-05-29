import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/concat';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Guard, TraversalCandidate } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';

import { GoogleBooksService } from '../services/google-books';
import { AppState, getBook, getCollectionLoaded } from '../reducers';
import { BookActions } from '../actions/book';

@Injectable()
export class BookExistsGuard implements Guard {
  constructor(
    private store: Store<AppState>,
    private googleBooks: GoogleBooksService,
    private bookActions: BookActions
  ) { }

  hasBookInStore(id: string) {
    return this.store.let(getBook(id)).map(book => !!book).take(1);
  }

  hasBookInApi(id: string) {
    return this.googleBooks.retrieveBook(id)
      .map(book => this.bookActions.loadBook(book))
      .do(action => this.store.dispatch(action))
      .map(book => !!book)
      .catch(() => Observable.of(false));
  }

  hasBook(id: string) {
    const inStore$ = this.hasBookInStore(id);
    const inApi$ = this.hasBookInApi(id);

    return inStore$.switchMap(inStore => {
      if (inStore) {
        return Observable.of(inStore);
      }

      return inApi$;
    });
  }

  waitForCollectionToLoad() {
    return this.store.let(getCollectionLoaded())
      .filter(loaded => loaded)
      .take(1);
  }

  protectRoute({ routeParams: { id } }: TraversalCandidate) {
    return this.waitForCollectionToLoad()
      .switchMapTo(this.hasBook(id));
  }
}
