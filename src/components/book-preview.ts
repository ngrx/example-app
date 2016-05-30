import { Component, Input } from '@angular/core';

import { Book } from '../models';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


export type BookInput = Book;

@Component({
  selector: 'book-preview',
  directives: [
    ...MD_CARD_DIRECTIVES,
    ...MD_LIST_DIRECTIVES
  ],
  template: `
    <a [linkTo]=" '/book/' + id">
      <md-card>
        <md-card-title-group>
          <md-card-title>{{ title }}</md-card-title>
          <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
          <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="description">{{ description | slice: 0:250 }}{{ description.length > 20 ? '...' : '' }}</p>
        </md-card-content>
        <md-list dense>
          <h3 md-subheader>Written By:</h3>
          <md-list-item *ngFor="let author of authors">
            <h4 md-line>{{ author }}</h4>
          </md-list-item>
        </md-list>
      </md-card>
    </a>
  `,
  styles: [`
    md-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 60px;
    }
    md-card-content {
      margin-top: 10px;
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
