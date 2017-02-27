import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { type } from '../util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export class ActionTypes {
  static readonly SEARCH =           type('[Book] Search')
  static readonly SEARCH_COMPLETE =  type('[Book] Search Complete')
  static readonly LOAD =             type('[Book] Load')
  static readonly SELECT =           type('[Book] Select')
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  readonly type = ActionTypes.SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Book[]) { }
}

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload: Book) { }
}

export class SelectAction implements Action {
  readonly type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
