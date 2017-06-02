import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyFilterModule } from '../';
import { FilterButtonTestComponent } from './filter-button.component.fixture';
import { FilterInlineTestComponent } from './filter-inline.component.fixture';
import { FilterSummaryTestComponent } from './filter-summary.component.fixture';

@NgModule({
  declarations: [
    FilterButtonTestComponent,
    FilterInlineTestComponent,
    FilterSummaryTestComponent
  ],
  imports: [
    CommonModule,
    SkyFilterModule
  ],
  exports: [
    FilterButtonTestComponent,
    FilterInlineTestComponent,
    FilterSummaryTestComponent
  ]
})
export class SkyActionButtonFixturesModule { }
