import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BookPreviewComponent, BookInput } from './book-preview';

export type BooksInput = BookInput[];

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent ],
  template: `
    <book-preview *ngFor="let book of books" [book]="book"></book-preview>
  `
})
export class BookPreviewListComponent {
  @Input() books: BooksInput;
}
