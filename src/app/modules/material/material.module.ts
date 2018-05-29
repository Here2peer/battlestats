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
  MatInputModule
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
    MatTabsModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
