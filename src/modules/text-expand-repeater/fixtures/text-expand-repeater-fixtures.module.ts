import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyTextExpandRepeaterModule } from '../';
import { TextExpandRepeaterTestComponent } from './text-expand-repeater.component.fixture';

@NgModule({
  declarations: [
    TextExpandRepeaterTestComponent
  ],
  imports: [
    CommonModule,
    SkyTextExpandRepeaterModule
  ],
  exports: [
    TextExpandRepeaterTestComponent
  ]
})
export class SkyTextExpandRepeaterFixturesModule { }
