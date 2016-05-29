import { Component, Input } from '@angular/core';

import { Book } from '../services/google-books';

export type BookInput = Book;

@Component({
  selector: 'book-preview',
  template: `
    <h3>{{ title }}</h3>
    <h4 *ngIf="subtitle">{{ subtitle }}</h4>

    <img *ngIf="thumbnail" [src]="thumbnail">

    <p>{{ description }}</p>

    <div>
      Written By:
      <ul>
        <li *ngFor="let author of authors">{{ author }}</li>
      </ul>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 300px;
      padding: 20px;
      border: 1px solid black;
      margin: 10px;
      cursor: pointer;
    }
  `]
})
export class BookPreviewComponent {
  @Input() book: BookInput;

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get authors() {
    return this.book.volumeInfo.authors;
  }

  get thumbnail() {
    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }
}
