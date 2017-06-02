import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkySortModule } from '../';
import { SortTestComponent } from './sort.component.fixture';

@NgModule({
  declarations: [
   SortTestComponent
  ],
  imports: [
    CommonModule,
    SkySortModule
  ],
  exports: [
    SortTestComponent
  ]
})
export class SkySortFixturesModule { }
