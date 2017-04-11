import { Action } from '@ngrx/store';

export abstract class EmptyAction implements Action {
  readonly type: string;

  constructor(public payload: undefined = undefined) { }
}
