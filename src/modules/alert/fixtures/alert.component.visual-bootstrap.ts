import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './alert.component.visual-fixture';
import {enableProdMode} from '@angular/core';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
