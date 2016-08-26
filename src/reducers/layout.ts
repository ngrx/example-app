import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { LayoutActionTypes, LayoutActions } from '../actions/layout';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case LayoutActionTypes.OPEN_SIDENAV:
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