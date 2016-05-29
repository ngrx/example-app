import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../services/google-books';
import { BookActions } from '../actions';

export interface BooksState {
  ids: string[];
  entities: { [id: string]: Book };
};

const initialState: BooksState = {
  ids: [],
  entities: {}
};

export default function(state = initialState, { type, payload }: Action): BooksState {
  switch (type) {
    case BookActions.ADD_TO_COLLECTION:
      return {
        ids: [ ...state.ids, (payload as Book).id ],
        entities: Object.assign({}, state.entities, {
          [(payload as Book).id]: (payload as Book)
        })
      };

    case BookActions.LOAD_COLLECTION_SUCCESS:
      return {
        ids: (payload as Book[]).map(book => book.id),
        entities: (payload as Book[]).reduce<{ [id: string]: Book }>((entities, book: Book) => {
          return Object.assign(entities, {
            [book.id]: book
          });
        }, {})
      };

    default:
      return state;
  }
}

export function getBooks() {
  return (state$: Observable<BooksState>) => state$
    .map(({ ids, entities }) => ids.map(id => entities[id]));
};

export function getBook(id: string) {
  return (state$: Observable<BooksState>) => state$
    .select(s => s.entities[id]);
}
