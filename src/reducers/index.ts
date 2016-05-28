import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeLogger is a powerful metareducer that logs out each time we dispatch
 * an action.
 *
 * A metareducer wraps a reducer function and returns a new reducer function
 * with superpowers. They are handy for all sorts of tasks, including
 * logging, undo/redo, and more.
 */
import { storeLogger } from 'ngrx-store-logger';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 */
import { combineReducers } from '@ngrx/store';

/**
 * @ngrx/router-store keeps the router in sync with @ngrx/store. To connect the
 * two, we need to use the routerReducer.
 */
import { routerReducer, RouterState } from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import searchReducer, * as fromSearch from './search';
import booksReducer, * as fromBooks from './books';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  router: RouterState;
  search: fromSearch.SearchState;
  books: fromBooks.BooksState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export default compose(storeLogger(), combineReducers)({
  router: routerReducer,
  search: searchReducer,
  books: booksReducer
});

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `search` state.
 *
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<AppState>) {
 * 	  this.searchState$ = state$.let(getSearchState());
 * 	}
 * }
 * ```
 */
export function getSearchState() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.search);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the search state then we pass the state to the search
 * reducer's getResults selector, finally returning an observable of
 * search results.
 */
export function getSearchResults() {
  return compose(fromSearch.getResults(), getSearchState());
}

export function getSearchStatus() {
  return compose(fromSearch.getStatus(), getSearchState());
}


/**
 * Just like with the search selectors, we also have to compose the book
 * reducer's selectors.
 */
export function getBooksState() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.books);
}

export function getBooks() {
  return compose(fromBooks.getBooks(), getBooksState());
}

export function getBook(id: string) {
  return compose(fromBooks.getBook(id), getBooksState());
}
