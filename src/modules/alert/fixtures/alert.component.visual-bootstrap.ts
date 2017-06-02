import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './alert.module.visual-fixture';
import {enableProdMode} from '@angular/core';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
