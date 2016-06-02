import { Pipe } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe {
  transform(str) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig);
    if (str.length >= 250)
      return withoutHtml.slice(0, 250) + '...';
    return withoutHtml;
  }
}
