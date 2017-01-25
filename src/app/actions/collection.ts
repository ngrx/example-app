import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { type } from '../util';


export const ActionTypes = {
  ADD_BOOK:             type('[Collection] Add Book'),
  ADD_BOOK_SUCCESS:     type('[Collection] Add Book Success'),
  ADD_BOOK_FAIL:        type('[Collection] Add Book Fail'),
  REMOVE_BOOK:          type('[Collection] Remove Book'),
  REMOVE_BOOK_SUCCESS:  type('[Collection] Remove Book Success'),
  REMOVE_BOOK_FAIL:     type('[Collection] Remove Book Fail'),
  LOAD:                 type('[Collection] Load'),
  LOAD_SUCCESS:         type('[Collection] Load Success'),
  LOAD_FAIL:            type('[Collection] Load Fail'),
};


/**
 * Add Book to Collection Actions
 */
export class AddBookAction implements Action {
  type = ActionTypes.ADD_BOOK;

  constructor(public payload: Book) { }
}

export class AddBookSuccessAction implements Action {
  type = ActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class AddBookFailAction implements Action {
  type = ActionTypes.ADD_BOOK_FAIL;

  constructor(public payload: Book) { }
}


/**
 * Remove Book from Collection Actions
 */
export class RemoveBookAction implements Action {
  type = ActionTypes.REMOVE_BOOK;

  constructor(public payload: Book) { }
}

export class RemoveBookSuccessAction implements Action {
  type = ActionTypes.REMOVE_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class RemoveBookFailAction implements Action {
  type = ActionTypes.REMOVE_BOOK_FAIL;

  constructor(public payload: Book) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Book[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddBookAction
  | AddBookSuccessAction
  | AddBookFailAction
  | RemoveBookAction
  | RemoveBookSuccessAction
  | RemoveBookFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
