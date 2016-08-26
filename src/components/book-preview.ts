import { Component, Input } from '@angular/core';
import { Book } from '../models/book';


export type BookInput = Book;

@Component({
  selector: 'bc-book-preview',
  template: `
    <a [routerLink]="['/book', id]">
      <md-card>
        <md-card-title-group>
          <md-card-title>{{ title }}</md-card-title>
          <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
          <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="description">{{ description | bcEllipsis }}</p>
        </md-card-content>
        <div class="footer">
          <h5 md-subheader>Written By:</h5>
          <span>
            {{ authors | bcAddCommas }}
          </span>
        </div>
      </md-card>
    </a>
  `,
  styles: [`
    md-card {
      width: 400px;
      height: 300px;
      margin: 15px;
    }
    md-card-title {
      margin-right: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    .footer {
      padding-bottom: 25px;
    }
  `]
})
export class BookPreviewComponent {
  @Input() book: BookInput;

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

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
