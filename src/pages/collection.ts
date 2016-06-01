import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBookCollection } from '../reducers';
import { BookPreviewListComponent, BooksInput } from '../components/book-preview-list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';


@Component({
  selector: 'collection-page',
  directives: [ BookPreviewListComponent, MD_CARD_DIRECTIVES ],
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>

    <book-preview-list [books]="books$ | async"></book-preview-list>
  `,
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPage {
  books$: Observable<BooksInput>;

  constructor(store: Store<AppState>) {
    this.books$ = store.let(getBookCollection());
  }
}
