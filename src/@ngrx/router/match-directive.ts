import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/finally';
import { Input, Directive, ViewContainerRef, TemplateRef, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';
import { RouterContext, RouterContextMatchRegistry } from './router-context';
import { matchPattern, Match } from './match-pattern';
import { Router } from './router';



@Directive({ selector: '[routerMatch]' })
export class MatchDirective implements RouterContext {
  private pattern$: ReplaySubject<string>;
  private exact$: BehaviorSubject<boolean>;
  private subscription: Subscription;
  private hasView: boolean;

  context = { params: {} };
  matches = new RouterContextMatchRegistry();
  match$: Observable<Match | null>;

  @Input() set routerMatch(value: string) { this.pattern$.next(value); }
  @Input() set routerMatchExact(value: boolean) { this.exact$.next(value); }

  constructor(
    @SkipSelf() context: RouterContext,
    router: Router,
    view: ViewContainerRef,
    template: TemplateRef<any>
  ) {
    this.pattern$ = new ReplaySubject(1);
    this.exact$ = new BehaviorSubject(false);
    this.hasView = false;
    this.matches = new RouterContextMatchRegistry();
    this.match$ = combineLatest(this.pattern$, router.location$, this.exact$, context.match$)
      .map(([ pattern, location, exact, parent ]) => {
        return matchPattern(pattern, location, exact, parent);
      })
      .do(match => {
        if (match === null) {
          context.matches.remove(this);
        }
        else {
          context.matches.add(this);
        }
      })
      .finally(() => context.matches.remove(this))
      .publishReplay(1)
      .refCount();

    this.subscription = this.match$.subscribe(match => {
      this.context.params = match ? match.params : {};

      if (Boolean(match) && !this.hasView) {
        this.hasView = true;
        view.createEmbeddedView(template, this.context);
      }
      else if (!Boolean(match) && this.hasView) {
        this.hasView = false;
        view.clear();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}