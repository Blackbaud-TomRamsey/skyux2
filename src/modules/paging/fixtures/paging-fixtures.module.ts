import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyPagingModule } from '../';
import { PagingTestComponent } from './paging.component.fixture';

@NgModule({
  declarations: [
    PagingTestComponent
  ],
  imports: [
    CommonModule,
    SkyPagingModule
  ],
  exports: [
    PagingTestComponent
  ]
})
export class SkyPagingFixturesModule { }
