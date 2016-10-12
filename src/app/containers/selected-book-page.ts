import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as collection from '../actions/collection';
import { Book } from '../models/book';

@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `
})
export class SelectedBookPageComponent {
  public book$: Observable<Book>;
  public isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.book$ = store.let(fromRoot.getSelectedBook);
    this.isSelectedBookInCollection$ = store.let(fromRoot.isSelectedBookInCollection);
  }

  public addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBookAction(book));
  }

  public removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBookAction(book));
  }
}
