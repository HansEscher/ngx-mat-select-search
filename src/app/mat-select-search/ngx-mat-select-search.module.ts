/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatLegacyButtonModule  } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectNoEntriesFoundDirective } from './mat-select-no-entries-found.directive';
import { MatDividerModule } from '@angular/material/divider';

export const MatSelectSearchVersion = '6.0.9';
export { MatSelectSearchClearDirective };
export { MatSelectNoEntriesFoundDirective };

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatLegacyButtonModule ,
    MatLegacyCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatLegacyTooltipModule,
    MatLegacySelectModule,
    MatDividerModule,
  ],
  declarations: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective,
    MatSelectNoEntriesFoundDirective
  ],
  exports: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective,
    MatSelectNoEntriesFoundDirective
  ]
})
export class NgxMatSelectSearchModule {
}
