import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models';

/**
 * Tip: Export type aliases for your component's inputs and outputs. Until we
 * get better tooling for templates, this helps enforce you are using a
 * component's API with type safety.
 */
export type BookInput = Book;
export type InCollectionInput = boolean;
export type AddOutput = Book;
export type RemoveOutput = Book;

@Component({
  selector: 'book-detail',
  template: `
    <h3>{{ title }}</h3>
    <h4 *ngIf="subtitle">{{ subtitle }}</h4>

    <button *ngIf="inCollection" (click)="remove.emit(book)">
      Remove Book from Collection
    </button>

    <button *ngIf="!inCollection" (click)="add.emit(book)">
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
   * Dumb components receieve data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'dumb' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   *
   * Tip: Utilize getters to keep templates clean in 'dumb' components.
   */
  @Input() book: BookInput;
  @Input() inCollection: InCollectionInput;
  @Output() add = new EventEmitter<AddOutput>();
  @Output() remove = new EventEmitter<RemoveOutput>();

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
