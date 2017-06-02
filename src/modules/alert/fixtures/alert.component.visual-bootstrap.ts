import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './alert.component.visual-fixture';
import {enableProdMode} from '@angular/core';
import { Bootstrapper } from '../../../../visual/bootstrapper';
Bootstrapper.bootstrapVisualModule();
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
