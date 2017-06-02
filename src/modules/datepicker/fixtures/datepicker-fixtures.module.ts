import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkyDatepickerModule } from '../';
import { DatepickerTestComponent } from './datepicker.component.fixture';
import { DatepickerCalendarTestComponent } from './datepicker-calendar.component.fixture';
import { DatepickerNoFormatTestComponent } from './datepicker-noformat.component.fixture';

@NgModule({
  declarations: [
    DatepickerTestComponent,
    DatepickerCalendarTestComponent,
    DatepickerNoFormatTestComponent
  ],
  imports: [
    CommonModule,
    SkyDatepickerModule,
    FormsModule
  ],
  exports: [
    DatepickerTestComponent,
    DatepickerCalendarTestComponent,
    DatepickerNoFormatTestComponent
  ]
})
export class SkyDatepickerFixturesModule { }
