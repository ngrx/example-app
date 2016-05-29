import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookActions } from '../actions/book';
import { Book } from '../models';


export interface CollectionState {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: CollectionState = {
  loaded: false,
  loading: false,
  ids: []
};

export default function(state = initialState, action: Action): CollectionState {
  switch (action.type) {
    case BookActions.LOAD_COLLECTION: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case BookActions.LOAD_COLLECTION_SUCCESS: {
      const books: Book[] = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: books.map(book => book.id)
      };
    }

    case BookActions.ADD_TO_COLLECTION_SUCCESS:
    case BookActions.REMOVE_FROM_COLLECTION_FAIL: {
      const book: Book = action.payload;

      if (state.ids.includes(book.id)) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, book.id ]
      });
    }

    case BookActions.REMOVE_FROM_COLLECTION_SUCCESS:
    case BookActions.ADD_TO_COLLECTION_FAIL: {
      const book: Book = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id)
      });
    }

    default: {
      return state;
    }
  }
}


export function getLoaded() {
  return (state$: Observable<CollectionState>) => state$
    .select(s => s.loaded);
}

export function getLoading() {
  return (state$: Observable<CollectionState>) => state$
    .select(s => s.loading);
}

export function getBookIds() {
  return (state$: Observable<CollectionState>) => state$
    .select(s => s.ids);
}

export function isBookInCollection(id: string) {
  return (state$: Observable<CollectionState>) => state$
    .let(getBookIds())
    .map(ids => ids.includes(id));
}
