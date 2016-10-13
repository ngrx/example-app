import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { Book } from '../models/book';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromSearch from './search';
import * as fromBooks from './books';
import * as fromCollection from './collection';
import * as fromLayout from './layout';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  search: fromSearch.State;
  books: fromBooks.State;
  collection: fromCollection.State;
  layout: fromLayout.State;
  router: fromRouter.RouterState;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  search: fromSearch.reducer,
  books: fromBooks.reducer,
  collection: fromCollection.reducer,
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.let(getBooksState);
 * 	}
 * }
 * ```
 *
 * Note that this is equivalent to:
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = getBooksState(state$);
 * 	}
 * }
 * ```
 *
 */
 export function getBooksState(state$: Observable<State>) {
  return state$.select(state => state.books);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and published the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
 export const getBookEntities = compose(fromBooks.getBookEntities, getBooksState);
 export const getBookIds = compose(fromBooks.getBookIds, getBooksState);
 export const getSelectedBook = compose(fromBooks.getSelectedBook, getBooksState);


/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export function getSearchState(state$: Observable<State>) {
 return state$.select(s => s.search);
}

export const getSearchBookIds = compose(fromSearch.getBookIds, getSearchState);
export const getSearchStatus = compose(fromSearch.getStatus, getSearchState);
export const getSearchQuery = compose(fromSearch.getQuery, getSearchState);
export const getSearchLoading = compose(fromSearch.getLoading, getSearchState);


/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const getSearchResults = function (state$: Observable<State>) {
  return combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getSearchBookIds)
  )
  .map(([ entities, ids ]) => ids.map(id => entities[id]));
};



export function getCollectionState(state$: Observable<State>) {
  return state$.select(s => s.collection);
}

export const getCollectionLoaded = compose(fromCollection.getLoaded, getCollectionState);
export const getCollectionLoading = compose(fromCollection.getLoading, getCollectionState);
export const getCollectionBookIds = compose(fromCollection.getBookIds, getCollectionState);

export const getBookCollection = function (state$: Observable<State>) {
  return combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getCollectionBookIds)
  )
  .map(([ entities, ids ]) => ids.map(id => entities[id]));
};

export const isSelectedBookInCollection = function (state$: Observable<State>) {
  return combineLatest<string[], Book>(
    state$.let(getCollectionBookIds),
    state$.let(getSelectedBook)
  )
  .map(([ ids, selectedBook ]) => ids.indexOf(selectedBook.id) > -1);
};

/**
 * Layout Reducers
 */
export const getLayoutState = (state$: Observable<State>) =>
  state$.select(state => state.layout);

export const getShowSidenav = compose(fromLayout.getShowSidenav, getLayoutState);
