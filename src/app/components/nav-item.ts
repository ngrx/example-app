import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-nav-item',
  template: `
    <a md-list-item [routerLink]="routerLink" (click)="activate.emit()">
      <md-icon md-list-icon>{{ icon }}</md-icon>
      <span md-line><ng-content></ng-content></span>
      <span md-line class="secondary">{{ hint }}</span>
    </a>
  `,
  styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class NavItemComponent {
  @Input() public icon: string = '';
  @Input() public hint: string = '';
  @Input() public routerLink: string | any[] = '/';
  @Output() public activate = new EventEmitter();
}
