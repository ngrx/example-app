import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = new class {
  readonly OPEN_SIDENAV =   type('[Layout] Open Sidenav')
  readonly CLOSE_SIDENAV =  type('[Layout] Close Sidenav')
};


export class OpenSidenavAction implements Action {
  readonly type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = ActionTypes.CLOSE_SIDENAV;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;