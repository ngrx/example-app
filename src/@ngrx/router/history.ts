import { History as HistoryBackend, ActionTypes, HistoryLocation } from 'history';
import { Observable } from 'rxjs/Observable';
import { Observer, NextObserver } from 'rxjs/Observer';

export interface HistoryEntry {
  type: ActionTypes;
  location: HistoryLocation;
}

export class History extends Observable<HistoryEntry> {
  private backend: HistoryBackend;

  constructor(backend: HistoryBackend) {
    super((observer: Observer<HistoryEntry>) => {
      observer.next({
        location: backend.location,
        type: backend.action
      });

      const unlisten = backend.listen((location, action) => {
        observer.next({
          location,
          type: action
        });
      });

      return unlisten;
    });

    this.backend = backend;
  }

  update(type: ActionTypes, location?: HistoryLocation) {
    switch (type) {
      case 'PUSH':
        this.backend.push(location);
        break;
      case 'REPLACE':
        this.backend.replace(location);
        break;
      case 'POP':
        this.backend.goBack();
        break;
    }
  }

  push(url: string, state?: any) {
    this.backend.push(url, state);
  }

  replace(url: string, state?: any) {
    this.backend.replace(url, state);
  }

  go(n: number) {
    this.backend.go(n);
  }

  goBack() {
    this.backend.goBack();
  }

  goForward() {
    this.backend.goForward();
  }

  block(message$: Observable<string>, onBlock?: NextObserver<HistoryEntry>): Observable<never> {
    return new Observable((observer: Observer<never>) => {
      let message: string = '';

      const unblock = this.backend.block((location, action) => {
        if (observer) {
          onBlock.next({ location, type: action });
        }

        return message;
      });

      const subscription = message$.subscribe({
        next(_message: string) {
          message = _message;
        },
        error(err: any) {
          observer.error(err);
          unblock();
        },
        complete() {
          observer.complete();
          unblock();
        }
      });

      return () => {
        subscription.unsubscribe();
        unblock();
      };
    });
  }
}
