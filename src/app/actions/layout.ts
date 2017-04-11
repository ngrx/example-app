import { EmptyAction } from './empty-action';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';
export const CLOSE_SIDENAV =  '[Layout] Close Sidenav';


export class OpenSidenavAction extends EmptyAction {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction extends EmptyAction {
  readonly type = CLOSE_SIDENAV;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;
