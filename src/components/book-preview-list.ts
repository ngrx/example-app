import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { BookPreviewComponent, BookInput } from './book-preview';

export type BooksInput = BookInput[];

@Component({
  selector: 'book-preview-list',
  directives: [ BookPreviewComponent ],
  template: `
    <book-preview *ngFor="let book of books" [book]="book"></book-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewListComponent {
  @Input() books: BooksInput;
}
