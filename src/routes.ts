import { Routes } from '@ngrx/router';

const routes: Routes = [
  {
    path: '/',
    loadComponent: load(done => (require as any).ensure([], require => {
      done(require('./pages/collection').CollectionPage);
    }))
  },
  {
    path: '/book/add',
    loadComponent: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./pages/book-add').BookAddPage);
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
