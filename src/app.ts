import { Component } from '@angular/core';
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


@Component({
  selector: 'app',
  directives: [
    MdAnchor,
    MdButton,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES
  ],
  providers: [ MdIconRegistry ],
  styles: [`
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .secondary {
      color: rgba(0, 0, 0, .54);
    }

    md-sidenav-layout {
      background: rgba(0, 0, 0, .03);
    }

    md-sidenav {
      width: 300px;
    }
  `],
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list>
          <a md-list-item linkTo="/" (click)="sidenav.close()">
            <md-icon md-list-icon>book</md-icon>
            <span md-line>My Collection</span>
            <span md-line class="secondary">View your book collection!</span>
          </a>
          <a md-list-item linkTo="/book/find" (click)="sidenav.close()">
            <md-icon md-list-icon>search</md-icon>
            <span md-line>Browse Books</span>
            <span md-line class="secondary">Find your next book!</span>
          </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar color="primary">
        <button md-icon-button (click)="sidenav.open()">
          <md-icon>menu</md-icon>
        </button>
        <span>Books Sample App</span>
      </md-toolbar>

      <route-view></route-view>

    </md-sidenav-layout>
  `
})
export default class App { }
