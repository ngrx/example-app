import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import * as layout from '../actions/layout';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case layout.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export function getShowSidenav(state$: Observable<State>) {
  return state$.select(state => state.showSidenav);
}