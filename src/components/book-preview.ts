import { Component, Input } from '@angular/core';

import { Book } from '../models';

export type BookInput = Book;

@Component({
  selector: 'book-preview',
  template: `
    <a [linkTo]=" '/book/' + id">
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
    </a>
  `,
  styles: [`
    a {
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

  /**
   * Dumb components receieve data through @Input() and communicate events through @Output()
   * but generally maintain no internal state of their own. All decisions are delegated to 'container',
   * or 'smart' components before data updates flow back down.
   *
   * Tip: Utilize getters to keep templates clean in 'dumb' components.
   */
  get id() {
    return this.book.id;
  }

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
