import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CollectionActions, CollectionActionTypes } from '../actions/collection';
import { Book } from '../models/book';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: CollectionActions): State {
  switch (action.type) {
    case CollectionActionTypes.LOAD_COLLECTION: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case CollectionActionTypes.LOAD_COLLECTION_SUCCESS: {
      const books = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: books.map(book => book.id)
      };
    }

    case CollectionActionTypes.ADD_BOOK_SUCCESS:
    case CollectionActionTypes.REMOVE_BOOK_FAIL: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, book.id ]
      });
    }

    case CollectionActionTypes.REMOVE_BOOK_SUCCESS:
    case CollectionActionTypes.ADD_TO_COLLECTION_FAIL: {
      const book = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id)
      });
    }

    default: {
      return state;
    }
  }
}


export function getLoaded(state$: Observable<State>) {
  return state$.select(s => s.loaded);
}

export function getLoading(state$: Observable<State>) {
  return state$.select(s => s.loading);
}

export function getBookIds(state$: Observable<State>) {
  return state$.select(s => s.ids);
}