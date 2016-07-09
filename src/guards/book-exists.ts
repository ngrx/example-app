import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/concat';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GoogleBooksService } from '../services/google-books';
import { AppState, hasBook, getCollectionLoaded } from '../reducers';
import { BookActions } from '../actions/book';


/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class BookExistsGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private googleBooks: GoogleBooksService,
    private bookActions: BookActions,
    private router: Router
  ) { }

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the collection state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForCollectionToLoad() {
    return this.store.let(getCollectionLoaded())
      .filter(loaded => loaded)
      .take(1);
  }

  /**
   * This method checks if a book with the given ID is already registered
   * in the Store
   */
  hasBookInStore(id: string) {
    return this.store.let(hasBook(id)).take(1);
  }

  /**
   * This method loads a book with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasBookInApi(id: string) {
    return this.googleBooks.retrieveBook(id)
      .map(book => this.bookActions.loadBook(book))
      .do(action => this.store.dispatch(action))
      .map(book => !!book)
      .catch(() => {
        this.router.navigate(['/404']);
        return Observable.of(false);
      });
  }

  /**
   * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
   * if the book is in store, and if not it then checks if it is in the
   * API.
   */
  hasBook(id: string) {
    return this.hasBookInStore(id)
      .switchMap(inStore => {
        if (inStore) {
          return Observable.of(inStore);
        }

        return this.hasBookInApi(id);
      });
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a book from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot) {
    return this.waitForCollectionToLoad()
      .switchMapTo(this.hasBook(route.params['id']));
  }
}
