import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { IMPORTS, DECLARATIONS, PROVIDERS, BOOTSTRAP } from './module.common';
import { DevtoolsComponent } from './containers/devtools';


@NgModule({
  imports: [
    ...IMPORTS,
    /**
     * instrumentStore() sets up the @ngrx/store-devtools providers
     */
    StoreDevtoolsModule.instrumentStore({
      maxAge: 10,
      monitor: useLogMonitor({
        position: 'right',
        visible: true
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [
    ...DECLARATIONS,
    DevtoolsComponent
  ],
  providers: PROVIDERS,
  bootstrap: [
    ...BOOTSTRAP,
    DevtoolsComponent
  ]
})
export class AppDevModule { }