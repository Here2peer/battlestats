import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatInputModule, MatSortModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
