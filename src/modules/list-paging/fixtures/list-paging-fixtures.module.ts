import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListPagingModule } from '../';
import { ListPagingTestComponent } from './list-paging.component.fixture';

@NgModule({
  declarations: [
    ListPagingTestComponent
  ],
  imports: [
    CommonModule,
    SkyListPagingModule
  ],
  exports: [
    ListPagingTestComponent
  ]
})
export class SkyListPagingFixturesModule { }
