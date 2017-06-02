import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyTextExpandModule } from '../';
import { TextExpandTestComponent } from './text-expand.component.fixture';

@NgModule({
  declarations: [
    TextExpandTestComponent
  ],
  imports: [
    CommonModule,
    SkyTextExpandModule
  ],
  exports: [
    TextExpandTestComponent
  ]
})
export class SkyTextExpandFixturesModule { }
