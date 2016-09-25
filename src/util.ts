import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Scheduler } from 'rxjs/Scheduler';
import { multicast } from 'rxjs/operator/multicast';
import { Observable } from 'rxjs/Observable';

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

/**
 * This operator behaves like shareReplay(https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sharereplay.md) 
 * with the difference that it will not replay the last known value when the subscribers go from 1 to 0 and then again from 0 to 1.
 */
export function shareLatest<T>(windowTime: number = Number.POSITIVE_INFINITY,
                                 scheduler?: Scheduler): Observable<T> {
  return multicast.call(this, () => new ReplaySubject<T>(1, windowTime, scheduler)).refCount();
}

export interface ShareLatestSignature<T> {
  (windowTime?: number, scheduler?: Scheduler): Observable<T>;
}

Observable.prototype.shareLatest = shareLatest;

declare module 'rxjs/Observable' {
  interface Observable<T> {
    shareLatest: ShareLatestSignature<T>;
  }
}

/**
 * Chain the selector and shareLatest on the source observable and memoizes the resulting observable.
 * Multiple subscribers using the same selector and source observable will share the same observable. 
 * This results in improved performance since the selector will only run when the number of subscribers
 * goes from 0 to 1. Any additional subscriber will receive the latest emitted value from the source.
 * 
 */
export function share<T, V>(selector: Selector<T, V>): Selector<T, V> {
  let cache = new Map<Observable<T>, Observable<V>>();

  return function(source: Observable<T>) {
    let result = cache.get(source);
    if (!result) {
      result = selector(source).shareLatest();
      cache.set(source);
    }

    return result;
  };
}