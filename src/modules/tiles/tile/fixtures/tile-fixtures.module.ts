import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyTileModule } from '../';
import { SkyTilesModule } from '../../';
import { TileTestComponent } from './tile.component.fixture';

@NgModule({
  declarations: [
    TileTestComponent
  ],
  imports: [
    CommonModule,
    SkyTileModule,
    SkyTilesModule
  ],
  exports: [
    TileTestComponent
  ]
})
export class SkyTileFixturesModule { }
