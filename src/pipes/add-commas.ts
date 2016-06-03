import { Pipe } from '@angular/core';

@Pipe({
  name: 'addCommas'
})
export class AddCommasPipe {
  transform(authors) {
    if(!authors) return '';
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
