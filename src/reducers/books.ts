import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book } from '../services/google-books';


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
