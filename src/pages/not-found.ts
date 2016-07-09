import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
  selector: 'not-found-page',
  directives: [ MD_CARD_DIRECTIVES, MdButton ],
  template: `
    <md-card>
      <md-card-title>404: Not Found</md-card-title>
      <md-card-content>
        <p>Hey! It looks like this page doesn't exist yet.</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">Take Me Home</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPage { }
