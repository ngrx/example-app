import './polyfills';
import { platformBrowser }    from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);