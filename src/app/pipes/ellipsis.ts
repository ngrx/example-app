import { Pipe } from '@angular/core';


@Pipe({ name: 'bcEllipsis' })
export class EllipsisPipe {
  transform(str: string, strLength: number = 250) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

    if (str.length >= strLength) {
      return `${withoutHtml.slice(0, strLength)}...`;
    }

    return withoutHtml;
  }
}
