import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createHashHistory } from 'history';
import { History } from './history';
import { RouterContext } from './router-context';
import { Router } from './router';
import { BlockComponent } from './block-component';
import { LinkDirective } from './link-directive';
import { MissDirective } from './miss-directive';
import { MatchDirective } from './match-directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlockComponent,
    LinkDirective,
    MissDirective,
    MatchDirective
  ],
  exports: [
    BlockComponent,
    LinkDirective,
    MissDirective,
    MatchDirective
  ]
})
export class RouterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RouterModule,
      providers: [
        { provide: History, useValue: new History(createHashHistory({})) },
        { provide: Router, useClass: Router },
        { provide: RouterContext, useExisting: Router }
      ]
    }
  }
}


export {
  History,
  RouterContext,
  Router
}