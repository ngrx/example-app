import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Control } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AppState, getSearchResults } from '../reducers';
import { BookActions } from '../actions';

@Component({
  selector: 'book-add-page',
  template: `
    <h2>Add a book!</h2>
    <div>
      <input type="test" [ngFormControl]="searchQuery$">
    </div>
    <ol>
      <li *ngFor="let title of resultTitles$ | async">{{ title }}</li>
    </ol>
  `
})
export class BookAddPage implements OnInit, OnDestroy {
  searchQuery$: Control;
  resultTitles$: Observable<string[]>;
  searchActions: Subscription;

  constructor(private store: Store<AppState>, private bookActions: BookActions) {
    this.searchQuery$ = new Control('');
    this.resultTitles$ = store.let(getSearchResults()).map(results => {
      return results.map(r => r.volumeInfo.title);
    });
  }

  ngOnInit() {
    this.searchActions = this.searchQuery$.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .map(query => this.bookActions.search(query))
      .subscribe(this.store);
  }

  ngOnDestroy() {
    this.searchActions.unsubscribe();
  }
}
