import { Pipe } from '@angular/core';


@Pipe({ name: 'bcEllipsis' })
export class EllipsisPipe {
  transform(str: string) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

    if (str.length >= 250) {
      return withoutHtml.slice(0, 250) + '...';
    }

    return withoutHtml;
  }
}
