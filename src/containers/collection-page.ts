import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'bc-collection-page',
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational 
   * components.
   */
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPageComponent {
  books$: Observable<BooksInput>;

  constructor(store: Store<fromRoot.State>) {
    this.books$ = store.let(fromRoot.getBookCollection);
  }
}
