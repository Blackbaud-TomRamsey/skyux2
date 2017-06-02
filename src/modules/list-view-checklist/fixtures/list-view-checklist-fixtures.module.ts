import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyListViewChecklistModule } from '../';
import { ListViewChecklistEmptyTestComponent } from './list-view-checklist-empty.component.fixture';
import {
  ListViewChecklistToolbarTestComponent
} from './list-view-checklist-toolbar.component.fixture';

import {
  ListViewChecklistTestComponent
} from './list-view-checklist.component.fixture';

import { SkyListModule } from '../../list';

import { SkyListToolbarModule } from '../../list-toolbar';

@NgModule({
  declarations: [
    ListViewChecklistEmptyTestComponent,
    ListViewChecklistToolbarTestComponent,
    ListViewChecklistTestComponent
  ],
  imports: [
    CommonModule,
    SkyListViewChecklistModule,
    SkyListModule,
    SkyListToolbarModule,
  ],
  exports: [
    ListViewChecklistEmptyTestComponent,
    ListViewChecklistToolbarTestComponent,
    ListViewChecklistTestComponent
  ]
})
export class SkyListViewChecklistFixturesModule { }
