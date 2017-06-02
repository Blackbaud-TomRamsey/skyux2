import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyToolbarModule } from '../';
import { ToolbarTestComponent } from './toolbar.component.fixture';
import { ToolbarSectionedTestComponent } from './toolbar-sectioned.component.fixture';

@NgModule({
  declarations: [
    ToolbarSectionedTestComponent,
    ToolbarTestComponent
  ],
  imports: [
    CommonModule,
    SkyToolbarModule
  ],
  exports: [
    ToolbarSectionedTestComponent,
    ToolbarTestComponent
  ]
})
export class SkyToolbarFixturesModule { }
