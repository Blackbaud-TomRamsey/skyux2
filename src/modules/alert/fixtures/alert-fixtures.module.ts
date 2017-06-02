import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyAlertModule } from '../';
import { AlertTestComponent } from './alert.component.fixture';

@NgModule({
  declarations: [
    AlertTestComponent
  ],
  imports: [
    CommonModule,
    SkyAlertModule
  ],
  exports: [
    AlertTestComponent
  ]
})
export class SkyAlertFixturesModule { }
