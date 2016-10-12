import { Pipe, PipeTransform } from '@angular/core';

/* tslint:disable:no-switch-case-fall-through */

@Pipe({ name: 'bcAddCommas' })
export class AddCommasPipe implements PipeTransform {
  public transform(authors: null | string[]) {
    if (!authors) return '';

    switch (authors.length) {
      case 1:
        return authors[0];
      case 2:
        return authors.join(' and ');
      default:
        const last = authors[authors.length - 1];
        const remaining = authors.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }
}
