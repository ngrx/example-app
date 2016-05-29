import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBooks } from '../reducers';
import { BookActions } from '../actions';
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

  constructor(private store: Store<AppState>, private bookActions: BookActions) {
    this.books$ = store.let(getBooks());
  }

  ngOnInit() {
    this.store.dispatch(this.bookActions.loadCollection());
  }
}
