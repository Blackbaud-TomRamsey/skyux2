import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyActionButtonModule } from '../';
import { ActionButtonTestComponent } from './action-button.component.fixture';

@NgModule({
  declarations: [
    ActionButtonTestComponent
  ],
  imports: [
    CommonModule,
    SkyActionButtonModule
  ],
  exports: [
    ActionButtonTestComponent
  ]
})
export class SkyActionButtonFixturesModule { }
