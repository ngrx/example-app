import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { actionType } from '../util';

/* tslint:disable:no-reserved-keywords */

export const ActionTypes = {
  ADD_BOOK:             actionType('[Collection] Add Book'),
  ADD_BOOK_SUCCESS:     actionType('[Collection] Add Book Success'),
  ADD_BOOK_FAIL:        actionType('[Collection] Add Book Fail'),
  REMOVE_BOOK:          actionType('[Collection] Remove Book'),
  REMOVE_BOOK_SUCCESS:  actionType('[Collection] Remove Book Success'),
  REMOVE_BOOK_FAIL:     actionType('[Collection] Remove Book Fail'),
  LOAD:                 actionType('[Collection] Load'),
  LOAD_SUCCESS:         actionType('[Collection] Load Success'),
  LOAD_FAIL:            actionType('[Collection] Load Fail')
};

/**
 * Add Book to Collection Actions
 */
export class AddBookAction implements Action {
  public type = ActionTypes.ADD_BOOK;

  constructor(public payload: Book) { }
}

export class AddBookSuccessAction implements Action {
  public type = ActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class AddBookFailAction implements Action {
  public type = ActionTypes.ADD_BOOK_FAIL;

  constructor(public payload: Book) { }
}

/**
 * Removje Book from Collection Actions
 */
export class RemoveBookAction implements Action {
  public type = ActionTypes.REMOVE_BOOK;

  constructor(public payload: Book) { }
}

export class RemoveBookSuccessAction implements Action {
  public type = ActionTypes.REMOVE_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class RemoveBookFailAction implements Action {
  public type = ActionTypes.REMOVE_BOOK_FAIL;

  constructor(public payload: Book) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  public type = ActionTypes.LOAD;
}

export class LoadSuccessAction implements Action {
  public type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Book[]) { }
}

export class LoadFailAction implements Action {
  public type = ActionTypes.LOAD_FAIL;

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
  | LoadFailAction
