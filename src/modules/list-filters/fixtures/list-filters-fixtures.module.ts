import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListFiltersModule } from '../';
import { ListFilterButtonTestComponent } from './list-filter-button.component.fixture';
import { ListFilterInlineTestComponent } from './list-filter-inline.component.fixture';
import { ListFilterSummaryTestComponent } from './list-filter-summary.component.fixture';

import {
  SkyListToolbarModule
} from '../../list-toolbar';

import { FormsModule } from '@angular/forms';

import {
  SkyCheckboxModule
} from '../../checkbox';

@NgModule({
  declarations: [
    ListFilterButtonTestComponent,
    ListFilterInlineTestComponent,
    ListFilterSummaryTestComponent
  ],
  imports: [
    CommonModule,
    SkyListFiltersModule,
    SkyListToolbarModule,
    FormsModule,
    SkyCheckboxModule
  ],
  exports: [
    ListFilterButtonTestComponent,
    ListFilterInlineTestComponent,
    ListFilterSummaryTestComponent
  ]
})
export class SkyListFiltersFixturesModule { }
