import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyTileContentModule } from '../';
import { SkyTilesModule } from '../../';

import { TileContentSectionTestComponent } from './tile-content-section.component.fixture';

@NgModule({
  declarations: [
    TileContentSectionTestComponent
  ],
  imports: [
    CommonModule,
    SkyTileContentModule,
    SkyTilesModule
  ],
  exports: [
    TileContentSectionTestComponent
  ]
})
export class SkyTileContentFixturesModule { }
