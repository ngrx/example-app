import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Book } from '../models/book';
import * as book from '../actions/book';
import * as collection from '../actions/collection';


export interface State {
  ids: string[];
  entities: { [id: string]: Book };
  selectedBookId: string | null;
};

const initialState: State = {
  ids: [],
  entities: {},
  selectedBookId: null,
};

export function reducer(state = initialState, action: book.Actions | collection.Actions): State {
  switch (action.type) {
    case book.ActionTypes.SEARCH_COMPLETE:
    case collection.ActionTypes.LOAD_SUCCESS: {
      const books = action.payload;
      const newBooks = books.filter(book => !state.entities[book.id]);

      const newBookIds = newBooks.map(book => book.id);
      const newBookEntities = newBooks.reduce((entities: { [id: string]: Book }, book: Book) => {
        return Object.assign(entities, {
          [book.id]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds ],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedBookId: state.selectedBookId
      };
    }

    case book.ActionTypes.LOAD: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, book.id ],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        }),
        selectedBookId: state.selectedBookId
      };
    }

    case book.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedBookId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export function getBookEntities(state$: Observable<State>) {
  return state$.select(state => state.entities);
}

export function getBookIds(state$: Observable<State>) {
  return state$.select(state => state.ids);
}

export function getSelectedBookId(state$: Observable<State>) {
  return state$.select(state => state.selectedBookId);
}

export function getSelectedBook(state$: Observable<State>) {
  return combineLatest<{ [id: string]: Book }, string>(
    state$.let(getBookEntities),
    state$.let(getSelectedBookId)
  )
  .map(([ entities, selectedBookId ]) => entities[selectedBookId]);
}

export function getAllBooks(state$: Observable<State>) {
  return combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getBookIds)
  )
  .map(([ entities, ids ]) => ids.map(id => entities[id]));
}