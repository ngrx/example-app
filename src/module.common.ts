import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './containers/app';
import { BookDetailComponent } from './components/book-detail';
import { BookPreviewComponent } from './components/book-preview';
import { BookPreviewListComponent } from './components/book-preview-list';
import { BookSearchComponent } from './components/book-search';
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';
import { BookEffects } from './effects/book';
import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { SelectedBookPageComponent } from './containers/selected-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { AddCommasPipe } from './pipes/add-commas';
import { EllipsisPipe } from './pipes/ellipsis';
import { GoogleBooksService } from './services/google-books';
import { routes } from './routes';
import { reducer } from './reducers';
import { schema } from './db';

export const IMPORTS = [
  CommonModule,
  BrowserModule,
  ReactiveFormsModule,

  /**
   * We must import all of the modules for the material components used
   * throughout the application
   */
  MdCoreModule.forRoot(),
  MdButtonModule.forRoot(),
  MdCardModule.forRoot(),
  MdIconModule.forRoot(),
  MdInputModule.forRoot(),
  MdListModule.forRoot(),
  MdSidenavModule.forRoot(),
  MdToolbarModule.forRoot(),
  MdProgressCircleModule.forRoot(),

  /**
   * provideRouter sets up all of the providers for @angular/router. It accepts
   * an array of routes and a location strategy. By default, it will use
   * `PathLocationStrategy`.
   */
  RouterModule.forRoot(routes, {
    useHash: true
  }),

  /**
   * StoreModule.provideStore is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   *
   * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
   */
  StoreModule.provideStore(reducer),

  /**
   * instrumentStore() sets up the @ngrx/store-devtools providers
   */
  // StoreDevtoolsModule.instrumentStore({
  //   maxAge: 5,
  //   monitor: useLogMonitor({
  //     position: 'right',
  //     visible: true
  //   })
  // }),
  // StoreLogMonitorModule,

  /**
   * runEffects configures all providers for @ngrx/effects. Observables decorated
   * as an @Effect() within the supplied services will ultimately be merged,
   * with output of relevant (registered as effects) actions being
   * dispatched into your application store. Any side-effects in
   * your application should be registered as effects.
   *
   * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
   */
  EffectsModule.run(BookEffects),

  /**
   * provideDB sets up @ngrx/db with the provided schema and makes the Database
   * service everywhere.
   */
  DBModule.provideDB(schema),

  RouterStoreModule.connectRouter()
];

export const DECLARATIONS = [
  AppComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
  FindBookPageComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent,
  CollectionPageComponent,
  NotFoundPageComponent,
  AddCommasPipe,
  EllipsisPipe,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];


export const PROVIDERS = [
  BookExistsGuard,
  GoogleBooksService
];

export const BOOTSTRAP = [
  AppComponent
];
