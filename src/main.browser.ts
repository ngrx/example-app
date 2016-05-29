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

bootstrap(App, [
  provideRouter(routes, HashLocationStrategy),
  provideDB(schema),
  provideStore(reducer),
  connectRouterToStore(),
  runEffects(effects),
  services,
  actions
]);
