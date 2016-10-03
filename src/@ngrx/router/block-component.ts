import 'rxjs/add/operator/map';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { History, HistoryEntry } from './history';


export interface NavigationEvent extends HistoryEntry {
  setMessage(message: string): void;
}


@Component({
  selector: 'router-block',
  template: ``
})
export class BlockComponent {
  private message$ = new BehaviorSubject<string>('');
  private blockSubscription: Subscription;

  @Input() set message(message: string) {
    this.message$.next(message);
  }

  block$ = new Subject<HistoryEntry>();

  @Output() navigate: Observable<NavigationEvent> = this.block$
    .map<NavigationEvent>(entry => Object.assign({
      setMessage: (message: string) => this.message$.next(message)
    }, entry));

  constructor(private history: History) { }

  ngOnInit() {
    const block$ = this.history.block(this.message$, this.block$);

    this.blockSubscription = block$.subscribe();
  }

  ngOnDestroy() {
    this.blockSubscription.unsubscribe();
  }
}