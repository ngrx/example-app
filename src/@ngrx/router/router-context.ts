import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HistoryLocation } from 'history';
import { Match } from './match-pattern';

export interface RouteEntry {
  pattern: string;
  exact: boolean;
}

export abstract class RouterContext {
  matches: RouterContextMatchRegistry;
  match$: Observable<Match | null>;
}

export class RouterContextMatchRegistry extends BehaviorSubject<RouterContext[]> {
  hasMatch$ = this.map(matches => matches.length !== 0);

  constructor() {
    super([]);
  }

  private hasMatch(match: RouterContext) {
    return this.value.indexOf(match) !== -1;
  }

  add(match: RouterContext) {
    if (!this.hasMatch(match)) {
      const matches = [ ...this.value, match ];
      this.next(matches);
    }
  }

  remove(match: RouterContext) {
    if (this.hasMatch(match)) {
      const matches = this.value.filter((next: RouterContext) => next !== match);
      this.next(matches);
    }
  }
}