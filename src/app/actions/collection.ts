import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { type } from '../util';


export const ActionTypes = new class{
  readonly ADD_BOOK =             type('[Collection] Add Book')
  readonly ADD_BOOK_SUCCESS =     type('[Collection] Add Book Success')
  readonly ADD_BOOK_FAIL =        type('[Collection] Add Book Fail')
  readonly REMOVE_BOOK =          type('[Collection] Remove Book')
  readonly REMOVE_BOOK_SUCCESS =  type('[Collection] Remove Book Success')
  readonly REMOVE_BOOK_FAIL =     type('[Collection] Remove Book Fail')
  readonly LOAD =                 type('[Collection] Load')
  readonly LOAD_SUCCESS =         type('[Collection] Load Success')
  readonly LOAD_FAIL =            type('[Collection] Load Fail')
};


/**
 * Add Book to Collection Actions
 */
export class AddBookAction implements Action {
  readonly type =ActionTypes.ADD_BOOK;

  constructor(public payload: Book) { }
}

export class AddBookSuccessAction implements Action {
  readonly type =ActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class AddBookFailAction implements Action {
  readonly type =ActionTypes.ADD_BOOK_FAIL;

  constructor(public payload: Book) { }
}


/**
 * Remove Book from Collection Actions
 */
export class RemoveBookAction implements Action {
  readonly type =ActionTypes.REMOVE_BOOK;

  constructor(public payload: Book) { }
}

export class RemoveBookSuccessAction implements Action {
  readonly type =ActionTypes.REMOVE_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class RemoveBookFailAction implements Action {
  readonly type =ActionTypes.REMOVE_BOOK_FAIL;

  constructor(public payload: Book) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type =ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type =ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Book[]) { }
}

export class LoadFailAction implements Action {
  readonly type =ActionTypes.LOAD_FAIL;

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
