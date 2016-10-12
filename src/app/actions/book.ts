import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { actionType } from '../util';

/* tslint:disable:no-reserved-keywords */

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique. 
 */
export const ActionTypes = {
  SEARCH:           actionType('[Book] Search'),
  SEARCH_COMPLETE:  actionType('[Book] Search Complete'),
  LOAD:             actionType('[Book] Load'),
  SELECT:           actionType('[Book] Select')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 * 
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  public type = ActionTypes.SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  public type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Book[]) { }
}

export class LoadAction implements Action {
  public type = ActionTypes.LOAD;

  constructor(public payload: Book) { }
}

export class SelectAction implements Action {
  public type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

/**
 * Exxport a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
