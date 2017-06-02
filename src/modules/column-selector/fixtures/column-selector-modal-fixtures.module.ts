import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyColumnSelectorModule } from '../';
import { ColumnSelectorTestComponent } from './column-selector-modal.component.fixture';

@NgModule({
  declarations: [
    ColumnSelectorTestComponent
  ],
  imports: [
    CommonModule,
    SkyColumnSelectorModule
  ],
  exports: [
    ColumnSelectorTestComponent
  ]
})
export class SkyColumnSelectorFixturesModule { }
