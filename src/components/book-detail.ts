import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';


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
  selector: 'bc-book-detail',
  template: `
    <md-card *ngIf="book">
      <md-card-title-group>
        <md-card-title>{{ title }}</md-card-title>
        <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
        <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
      </md-card-title-group>
      <md-card-content>
        <p [innerHtml]="description"></p>
      </md-card-content>
      <div class="footer">
        <h5 md-subheader>Written By:</h5>
        <span>
          {{ authors | bcAddCommas }}
        </span>
      </div>
      <md-card-actions align="end">
        <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(book)">
        Remove Book from Collection
        </button>

        <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(book)">
        Add Book to Collection
        </button>
      </md-card-actions>
    </md-card>

  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    md-card {
      max-width: 600px;
    }
    md-card-title {
      margin-left: 10px;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
      margin-bottom: 125px;
    }
    .footer {
      padding-bottom: 75px;
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
