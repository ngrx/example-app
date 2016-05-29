import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../models';
import { BookActions } from '../actions';


export interface BooksState {
  ids: string[];
  entities: { [id: string]: Book };
};

const initialState: BooksState = {
  ids: [],
  entities: {}
};

export default function(state = initialState, action: Action): BooksState {
  switch (action.type) {
    case BookActions.SEARCH_COMPLETE:
    case BookActions.LOAD_COLLECTION_SUCCESS: {
      const books: Book[] = action.payload;
      const newBooks = books.filter(book => !state.entities[book.id]);

      const newBookIds = newBooks.map(book => book.id);
      const newBookEntities = newBooks.reduce((entities: { [id: string]: Book }, book: Book) => {
        return Object.assign(entities, {
          [book.id]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds ],
        entities: Object.assign({}, state.entities, newBookEntities)
      };
    }

    case BookActions.LOAD_BOOK: {
      const book: Book = action.payload;

      if (state.ids.includes(book.id)) {
        return state;
      }

      return {
        ids: [ ...state.ids, book.id ],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        })
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
export function getBookEntities() {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities);
};

export function getBook(id: string) {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities[id]);
}

export function getBooks(bookIds: string[]) {
  return (state$: Observable<BooksState>) => state$
    .let(getBookEntities())
    .map(entities => bookIds.map(id => entities[id]));
}

export function hasBook(id: string) {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.ids.includes(id));
}
