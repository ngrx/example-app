import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export type QueryInput = string;
export type SearchOutput = string;

@Component({
  selector: 'book-search',
  template: `
    <input placeholder="Search for a book..." [value]="query" (keyup)="keyup$.next($event)">
  `
})
export class BookSearchComponent {
  keyup$ = new Subject<KeyboardEvent>();

  @Input() query: QueryInput = '';
  @Output() search: Observable<SearchOutput> = this.keyup$
    .debounceTime(300)
    .map(event => (event.target as HTMLInputElement).value)
    .distinctUntilChanged();
}
