import { Component, Input } from '@angular/core';


@Component({
  selector: 'bc-layout',
  template: `
    <md-sidenav-layout fullscreen [class.with-devtools]="hasDevtools">
      
      <ng-content></ng-content>

    </md-sidenav-layout>
  `,
  styles: [`
    md-sidenav-layout {
      background: rgba(0, 0, 0, 0.03);
    }

    .with-devtools {
      right: 30% !important; // Make space for the devtools
    }
    
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `]
})
export class LayoutComponent {
  @Input() hasDevtools = false;
}