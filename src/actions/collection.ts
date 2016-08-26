import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { label } from '../util';


export const CollectionActionTypes = {
  ADD_BOOK: label('[Collection] Add Book'),
  ADD_BOOK_SUCCESS: label('[Collection] Add Book Success'),
  ADD_TO_COLLECTION_FAIL: label('[Collection] Add Book Fail'),
  REMOVE_BOOK: label('[Collection] Remove Book'),
  REMOVE_BOOK_SUCCESS: label('[Collection] Remove Book Success'),
  REMOVE_BOOK_FAIL: label('[Collection] Remove Book Fail'),
  LOAD_COLLECTION: label('[Collection] Load Collection'),
  LOAD_COLLECTION_SUCCESS: label('[Collection] Load Collection Success')
};


export class AddBookAction implements Action {
  type = CollectionActionTypes.ADD_BOOK;

  constructor(public payload: Book) { }
}

export class AddBookSuccessAction implements Action {
  type = CollectionActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class AddBookFailAction implements Action {
  type = CollectionActionTypes.ADD_TO_COLLECTION_FAIL;

  constructor(public payload: Book) { }
}

export class RemoveBookAction implements Action {
  type = CollectionActionTypes.REMOVE_BOOK;

  constructor(public payload: Book) { }
}

export class RemoveBookSuccessAction implements Action {
  type = CollectionActionTypes.REMOVE_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class RemoveBookFailAction implements Action {
  type = CollectionActionTypes.REMOVE_BOOK_FAIL;

  constructor(public payload: Book) { }
}

export class LoadCollectionAction implements Action {
  type = CollectionActionTypes.LOAD_COLLECTION;

  constructor() { }
}

export class LoadCollectionSuccessAction implements Action {
  type = CollectionActionTypes.LOAD_COLLECTION_SUCCESS;

  constructor(public payload: Book[]) { }
}


export type CollectionActions =
    AddBookAction
  | AddBookSuccessAction
  | AddBookFailAction
  | RemoveBookAction
  | RemoveBookSuccessAction
  | RemoveBookFailAction
  | LoadCollectionAction
  | LoadCollectionSuccessAction
