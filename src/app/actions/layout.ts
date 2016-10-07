import { Action } from '@ngrx/store';
import { actionType } from '../util';

/* tslint:disable:no-reserved-keywords */

export const ActionTypes = {
  OPEN_SIDENAV:   actionType('[Layout] Open Sidenav'),
  CLOSE_SIDENAV:  actionType('[Layout] Close Sidenav')
};

export class OpenSidenavAction implements Action {
  public type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  public type = ActionTypes.CLOSE_SIDENAV;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;
