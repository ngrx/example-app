import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBookCollection } from '../reducers';
import { BookPreviewListComponent, BooksInput } from '../components/book-preview-list';


@Component({
  selector: 'collection-page',
  directives: [ BookPreviewListComponent ],
  template: `
    <h2>My Collection</h2>

    <book-preview-list [books]="books$ | async"></book-preview-list>
  `
})
export class CollectionPage {
  books$: Observable<BooksInput>;

  constructor(store: Store<AppState>) {
    this.books$ = store.let(getBookCollection());
  }
}
