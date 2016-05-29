import { Routes } from '@ngrx/router';

import { BookExistsGuard } from './guards/book-exists';

const routes: Routes = [
  {
    path: '/',
    loadComponent: load(done => (require as any).ensure([], require => {
      done(require('./pages/collection').CollectionPage);
    }))
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
    loadComponent: load(done => (require as any).ensure([], require => {
      done(require('./pages/not-found').NotFoundPage);
    }))
  }
];


function load(loader: (done: (component: any) => void) => void) {
  return () => new Promise(resolve => loader(resolve));
}

export default routes;
