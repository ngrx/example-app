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
  styleUrls: ['./app.css'],
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list>
          <a md-list-item *ngFor="let view of views" [linkTo]="view.link" (click)="sidenav.close()">
            <md-icon md-list-icon>{{ view.icon }}</md-icon>
            <span md-line>{{ view.name }}</span>
            <span md-line class="secondary">{{ view.description }}</span>
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
export default class App {
  views: Object[] = [
    {
      name: 'My Collection',
      description: 'View your book collection!',
      icon: 'book',
      link: '/'
    },
    {
      name: 'Browse Books',
      description: 'Find your next book!',
      icon: 'search',
      link: '/book/find'
    }
  ]
}
