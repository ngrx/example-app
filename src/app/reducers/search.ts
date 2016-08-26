import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import * as book from '../actions/book';


export interface State {
  ids: string[];
  loading: boolean;
  query: string;
};

const initialState: State = {
  ids: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: book.Actions): State {
  switch (action.type) {
    case book.ActionTypes.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case book.ActionTypes.SEARCH_COMPLETE: {
      const books = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}

export function getStatus(state$: Observable<State>) {
  return state$.select(state => state.loading);
}

export function getBookIds(state$: Observable<State>) {
  return state$.select(state => state.ids);
}

export function getQuery(state$: Observable<State>) {
  return state$.select(state => state.query);
}

export function getLoading(state$: Observable<State>) {
  return state$.select(state => state.loading);
}