import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/multicast';
import { Scheduler } from 'rxjs/Scheduler';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 * 
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let labelCache: { [label: string]: boolean } = {};
export function label<T>(label: T | ''): T {
  if (labelCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  labelCache[<string>label] = true;

  return <T>label;
}

export interface Selector<T, V> {
  (input: Observable<T>): Observable<V>;
}

export function share<T, V>(selector: Selector<T, V>): Selector<T, V> {
  let result: Observable<V>;

  return function(input: Observable<T>) {
    if (!result) {
      result = selector(input).multicast(() => new ReplaySubject<V>(1)).refCount();
    }

    return result;
  };
}