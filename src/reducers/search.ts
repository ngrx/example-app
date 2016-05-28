import 'rxjs/add/operator/map';
import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../services/google-books';
import { BookActions } from '../actions/book';


export interface SearchState {
  ids: string[];
  loading: boolean;
  entities: { [id: string]: Book };
};

const initialState: SearchState = {
  ids: [],
  loading: false,
  entities: {}
};

export default function(state = initialState, { type, payload }: Action): SearchState {
  switch (type) {
    case BookActions.SEARCH:
      return Object.assign(state, {
        loading: true
      });

    case BookActions.SEARCH_COMPLETE:
      return {
        ids: (payload as Book[]).map(book => book.id),
        loading: false,
        entities: (payload as Book[]).reduce((entities: { [id: string]: Book }, book: Book) => {
          return Object.assign(entities, {
            [book.id]: book
          });
        }, {})
      };

    default:
      return state;
  }
}

export function getStatus() {
  return (state$: Observable<SearchState>) => state$
    .select(s => s.loading);
}

export function getResults() {
  return (state$: Observable<SearchState>) => state$
    .map(({ ids, entities }) => ids.map(id => entities[id]));
};
