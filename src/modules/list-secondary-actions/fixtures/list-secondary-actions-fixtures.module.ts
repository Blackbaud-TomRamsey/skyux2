import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListSecondaryActionsModule } from '../';
import { ListSecondaryActionsTestComponent } from './list-secondary-actions.component.fixture';

import { SkyListToolbarModule } from '../../list-toolbar';

@NgModule({
  declarations: [
    ListSecondaryActionsTestComponent
  ],
  imports: [
    CommonModule,
    SkyListSecondaryActionsModule,
    SkyListToolbarModule
  ],
  exports: [
    ListSecondaryActionsTestComponent
  ]
})
export class SkyListSecondaryActionsFixturesModule { }
