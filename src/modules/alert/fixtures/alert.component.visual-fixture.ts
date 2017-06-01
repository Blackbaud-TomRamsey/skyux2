import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyAlertModule } from '../alert.module';

import { Bootstrapper } from '../../../../visual/bootstrapper';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'sky-demo-app',
  templateUrl: './alert.component.visual-fixture.html'
})
export class AppComponent {
  public alertCloseable = true;
}

@NgModule({
  imports: [
    BrowserModule,
    SkyAlertModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
