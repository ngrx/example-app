import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as fromRoot from '../reducers';
import * as book from '../actions/book';

/**
 * Note: Container components are also reusable. Whether or not 
 * a component is a presentation component or a container
 * component is an implementation detail.
 * 
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the 
 * SelectedBookPageComponent
 */
@Component({
  selector: 'bc-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="loading$ | async">Loading...</div>
    <bc-selected-book-page *ngIf="hasBook$ | async"></bc-selected-book-page>
    <bc-not-found-page *ngIf="missingBook$ | async"></bc-not-found-page>
  `
})
export class ViewBookPageComponent {
  loading$: Observable<boolean>;
  hasBook$: Observable<boolean>;
  missingBook$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    const hasSelectedBook$ = store.let(fromRoot.getSelectedBook).map(book => Boolean(book));

    this.loading$ = store.let(fromRoot.isBookLoading);
    this.hasBook$ = combineLatest(hasSelectedBook$, this.loading$)
      .map(([ hasSelectedBook, loading ]) => hasSelectedBook && !loading);

    this.missingBook$ = combineLatest(hasSelectedBook$, this.loading$)
      .map(([ hasSelectedBook, loading ]) => !hasSelectedBook && !loading);
  }

  @Input() set id(id: string) {
    this.store.dispatch(new book.LoadAction(id));
  }
}
