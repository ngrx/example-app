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

export function getBooks() {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities);
};

export function getBook(id: string) {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities[id]);
}
