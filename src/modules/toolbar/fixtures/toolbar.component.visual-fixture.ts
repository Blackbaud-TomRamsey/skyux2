import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyToolbarModule } from '../toolbar.module';

import { Bootstrapper } from '../../../../visual/bootstrapper';

@Component({
  selector: 'sky-demo-app',
  templateUrl: './toolbar.component.visual-fixture.html'
})
export class AppComponent {
}

@NgModule({
  imports: [
    BrowserModule,
    SkyToolbarModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

Bootstrapper.bootstrapModule(AppModule);
