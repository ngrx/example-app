import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { label } from '../util';

/**
 * For each action type in an action group, we make a simple
 * enum object for all of our action types.
 * 
 * The 'label' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * actions in the application are unique. 
 */
export const BookActionTypes = {
  SEARCH: label('[Book] Search'),
  SEARCH_COMPLETE: label('[Book] Search Complete'),
  LOAD_BOOK: label('[Book] Load Book'),
  SELECT_BOOK: label('[Book] Select Book'),
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in our reducer functions.
 */
export class SearchBooksAction implements Action {
  type = BookActionTypes.SEARCH;

  constructor(public payload: string) { }
}

export class SearchBooksCompleteAction implements Action {
  type = BookActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Book[]) { }
}

export class LoadBookAction implements Action {
  type = BookActionTypes.LOAD_BOOK;

  constructor(public payload: Book) { }
}

export class SelectBookAction implements Action {
  type = BookActionTypes.SELECT_BOOK;

  constructor(public payload: string) { }
}

/**
 * We export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BookActions =
    SearchBooksAction
  | SearchBooksCompleteAction
  | LoadBookAction
  | SelectBookAction;