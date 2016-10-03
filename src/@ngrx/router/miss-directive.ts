import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RouterContext } from './router-context';


@Directive({ selector: '[routerMiss]' })
export class MissDirective {
  private hasView = false;
  private subscription: Subscription;

  constructor(context: RouterContext, view: ViewContainerRef, template: TemplateRef<any>) {
    this.subscription = context.matches.hasMatch$
      .subscribe(hasMatch => {
        if (hasMatch && this.hasView) {
          this.hasView = false;
          view.clear();
        }
        else if (!hasMatch && !this.hasView) {
          this.hasView = true;
          view.createEmbeddedView(template);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}