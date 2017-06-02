import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyTimepickerModule } from '../';
import { TimepickerTestComponent } from './timepicker-component.fixture';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    TimepickerTestComponent
  ],
  imports: [
    CommonModule,
    SkyTimepickerModule,
    FormsModule
  ],
  exports: [
    TimepickerTestComponent
  ]
})
export class SkyTimepickerFixturesModule { }
