import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

platformBrowserDynamic().bootstrapModule(AppModule);