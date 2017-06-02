import { Component, NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { SkyAlertModule } from '../alert.module';
import { AppComponent } from './alert.component.visual-fixture';

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
