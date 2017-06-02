import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListColumnSelectorActionModule } from '../';
import {
  ListColumnSelectorActionTestComponent
} from './list-column-selector-action.component.fixture';

import {
  SkyListModule,
  SkyListComponent
} from '../../list';

import {
  SkyListToolbarModule
} from '../../list-toolbar';

import {
  SkyListSecondaryActionsModule
} from '../../list-secondary-actions';

import {
  SkyListViewGridModule
} from '../../list-view-grid';

import {
  SkyGridModule
} from '../../grid';

import {
  SkyColumnSelectorModule
} from '../../column-selector';

@NgModule({
  declarations: [
    ListColumnSelectorActionTestComponent
  ],
  imports: [
    CommonModule,
    SkyListColumnSelectorActionModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyListSecondaryActionsModule,
    SkyGridModule,
    SkyListViewGridModule,
    SkyColumnSelectorModule
  ],
  exports: [
    ListColumnSelectorActionTestComponent
  ]
})
export class SkyListColumnSelectorFixturesModule { }
