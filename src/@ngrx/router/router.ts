import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HistoryLocation } from 'history';
import { History } from './history';
import { RouterContext, RouterContextMatchRegistry } from './router-context';


@Injectable()
export class Router implements RouterContext {
  matches = new RouterContextMatchRegistry();
  location$: Observable<HistoryLocation>;
  match$ = of(null);

  constructor(private history: History) {
    this.location$ = history.map(h => h.location);
  }
}