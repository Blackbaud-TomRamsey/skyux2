import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListToolbarModule } from '../';
import { ListToolbarTestComponent } from './list-toolbar.component.fixture';

@NgModule({
  declarations: [
    ListToolbarTestComponent
  ],
  imports: [
    CommonModule,
    SkyListToolbarModule
  ],
  exports: [
    ListToolbarTestComponent
  ]
})
export class SkyListToolbarFixturesModule { }
