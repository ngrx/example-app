import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getBook, isBookInCollection } from '../reducers';
import { BookActions } from '../actions/book';
import {
  BookDetailComponent,
  BookInput,
  InCollectionInput,
  AddOutput,
  RemoveOutput
} from '../components/book-detail';


@Component({
  selector: 'book-view-page',
  directives: [ BookDetailComponent ],
  template: `
    <book-detail
      [book]="book$ | async"
      [inCollection]="isBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </book-detail>
  `
})
export class BookViewPage {
  book$: Observable<BookInput>;
  isBookInCollection$: Observable<InCollectionInput>;

  constructor(
    private store: Store<AppState>,
    private bookActions: BookActions,
    private route: ActivatedRoute
  ) {
    this.book$ = route
      .params
      .select<string>('id')
      .switchMap(id => store.let(getBook(id)));

    this.isBookInCollection$ = route
      .params
      .select<string>('id')
      .switchMap(id => store.let(isBookInCollection(id)));
  }

  addToCollection(book: AddOutput) {
    this.store.dispatch(this.bookActions.addToCollection(book));
  }

  removeFromCollection(book: RemoveOutput) {
    this.store.dispatch(this.bookActions.removeFromCollection(book));
  }
}
