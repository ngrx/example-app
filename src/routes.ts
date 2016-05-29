import { Routes } from '@ngrx/router';

import { BookExistsGuard } from './guards';


const routes: Routes = [
  {
    path: '/',
    loadComponent: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/collection').CollectionPage);
      });
    })
  },
  {
    path: '/book/find',
    loadComponent: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/book-find').BookFindPage);
      });
    })
  },
  {
    path: '/book/:id',
    guards: [ BookExistsGuard ],
    loadComponent: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/book-view').BookViewPage);
      });
    })
  },
  {
    path: '/*',
    loadComponent: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/not-found').NotFoundPage);
      });
    })
  }
];

export default routes;
