import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkySearchModule } from '../';
import { SearchTestComponent } from './search.component.fixture';

@NgModule({
  declarations: [
    SearchTestComponent
  ],
  imports: [
    CommonModule,
    SkySearchModule
  ],
  exports: [
    SearchTestComponent
  ]
})
export class SkySearchFixturesModule { }
