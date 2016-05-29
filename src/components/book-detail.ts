import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Book } from '../models';

export type BookInput = Book;
export type InCollectionInput = boolean;
export type AddOutput = Book;
export type RemoveOutput = Book;

@Component({
  selector: 'book-detail',
  template: `
    <h3>{{ title }}</h3>
    <h4 *ngIf="subtitle">{{ subtitle }}</h4>

    <button *ngIf="inCollection" (click)="remove.next(book)">
      Remove Book from Collection
    </button>

    <button *ngIf="!inCollection" (click)="add.next(book)">
      Add Book to Collection
    </button>

    <img *ngIf="thumbnail" [src]="thumbnail">

    <p [innerHtml]="description"></p>

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
export class BookDetailComponent {
  /**
   * Dumb components receieve data through @Input() and communicate events through @Output()
   * but generally maintain no internal state of their own. All decisions are delegated to 'container',
   * or 'smart' components before data updates flow back down.
   *
   * Tip: Utilize getters to keep templates clean in 'dumb' components.
   */
  @Input() book: BookInput;
  @Input() inCollection: InCollectionInput;
  @Output() add = new Subject<AddOutput>();
  @Output() remove = new Subject<RemoveOutput>();

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
