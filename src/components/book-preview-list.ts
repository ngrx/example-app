import { Component, Input } from '@angular/core';

import { BookPreviewComponent, BookInput } from './book-preview';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';


export type BooksInput = BookInput[];

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent, MD_GRID_LIST_DIRECTIVES ],
  template: `
    <md-grid-list cols="3" rowHeight="375">
      <md-grid-tile *ngFor="let book of books">
        <book-preview [book]="book"></book-preview>
      </md-grid-tile>
    </md-grid-list>
  `
})
export class BookPreviewListComponent {
  @Input() books: BooksInput;
}
