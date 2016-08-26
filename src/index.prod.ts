import './polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { AppProdModuleNgFactory } from './module.prod.ngfactory';

platformBrowser().bootstrapModuleFactory(AppProdModuleNgFactory);