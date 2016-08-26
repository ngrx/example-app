import { Component } from '@angular/core';


@Component({
  selector: 'bc-layout',
  template: `
    <md-sidenav-layout fullscreen>
      
      <ng-content></ng-content>

    </md-sidenav-layout>
  `,
  styles: [`
    md-sidenav-layout {
      background: rgba(0, 0, 0, 0.03);
    }
    
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `]
})
export class LayoutComponent { }