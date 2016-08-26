import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppDevModule } from './module.dev';
import { useHMR } from './hmr';

declare var module: any;

useHMR(module, platformBrowserDynamic, AppDevModule);