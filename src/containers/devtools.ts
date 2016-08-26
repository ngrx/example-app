import { Component } from '@angular/core';

@Component({
  selector: 'bc-devtools',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class DevtoolsComponent { }