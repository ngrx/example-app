import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layoutActions from '../actions/layout';

@Component({
  selector: 'book-collection-app',
  template: `
    <bc-layout [hasDevtools]="!prod">
      <bc-sidenav [open]="showSidenav$ | async">
        <bc-nav-item (activate)="closeSidenav()" routerLink="/" icon="book" hint="View your book collection">
          My Collection
        </bc-nav-item>
        <bc-nav-item (activate)="closeSidenav()" routerLink="/book/find" icon="search" hint="Find your next book!">
          My Collection
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar (openMenu)="openSidenav()">
        Books Sample App
      </bc-toolbar>

      <router-outlet></router-outlet>
    </bc-layout>
  `
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) { }

  prod = PROD; // PROD flag defined by Webpack
  showSidenav$ = this.store.let(fromRoot.getShowSidenav);

  closeSidenav() {
    this.store.dispatch(new layoutActions.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layoutActions.OpenSidenavAction());
  }
}
