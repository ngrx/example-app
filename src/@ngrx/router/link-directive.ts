import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { compose } from '@ngrx/core';
import { History } from './history';


@Directive({
  selector: '[routerLink]'
})
export class LinkDirective {
  @HostBinding('attr.href') @Input() routerLink: string;
  @Input() target: string | null = null;

  constructor(private history: History) { }


  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    if ( isPrevented($event) || isComboClick($event) || hasTarget(this.target) ) {
      return;
    }

    this.history.push(this.routerLink);
    $event.preventDefault();
  }
}


function isComboClick(event: MouseEvent) {
  const buttonEvent = event.which || event.button;

  return buttonEvent > 1 || event.ctrlKey || event.metaKey || event.shiftKey;
}

function hasTarget(target: string | null) {
  return target !== null;
}

function isPrevented(event: MouseEvent) {
  return event.defaultPrevented;
}