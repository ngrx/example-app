import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BookPreviewComponent, BookInput } from './book-preview';

export type BooksInput = BookInput[];
export type SelectOutput = BookInput;

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent ],
  template: `
    <book-preview
      *ngFor="let book of books"
      [book]="book"
      (click)="select.next(book)">
    </book-preview>
  `
})
export class BookPreviewListComponent {
  @Input() books: BooksInput;
  @Output() select = new Subject<SelectOutput>();
}
