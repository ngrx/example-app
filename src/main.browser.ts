import { bootstrap } from '@angular/platform-browser-dynamic';
import { HashLocationStrategy } from '@angular/common';
import { provideRouter } from '@ngrx/router';
import { provideStore } from '@ngrx/store';
import { provideDB } from '@ngrx/db';
import { connectRouterToStore } from '@ngrx/router-store';
import { runEffects } from '@ngrx/effects';

import App from './app';
import routes from './routes';
import schema from './db-schema';
import reducer from './reducers';
import effects from './effects';
import services from './services';
import actions from './actions';

/**
 * provideStore is run once at application bootstrap, accepting a reducer function or object map of reducer functions.
 * If passed an object of reducers, combineReducers will be run creating your application meta-reducer.
 * This returns all providers for an @ngrx/store based application.
 * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
 * 
 * runEffects configures all providers for @ngrx/effects.
 * Observables decorated as an @Effect() within the supplied services will ultimately be merged, with
 * output of relevant (registered as effects) actions being dispatched into your application store. 
 * Any side-effects in your application should be registered as effects.
 * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
 */
bootstrap(App, [
  provideRouter(routes, HashLocationStrategy),
  provideDB(schema),
  provideStore(reducer),
  connectRouterToStore(),
  runEffects(effects),
  services,
  actions
]);
