import { Pipe } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe {
  transform(str) {
    if (str.length >= 250)
      return str.slice(0, 250).replace(/(<([^>]+)>)/ig) + '...';
    return str;
  }
}
