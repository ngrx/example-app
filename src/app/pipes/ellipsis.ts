import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bcEllipsis' })
export class EllipsisPipe implements PipeTransform {
  public transform(str: string) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

    if (str.length >= 250) {
      return withoutHtml.slice(0, 250) + '...';
    }

    return withoutHtml;
  }
}
