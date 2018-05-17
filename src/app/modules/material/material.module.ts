import { NgModule } from '@angular/core';

import {
  MatCardModule, MatGridListModule, MatExpansionModule, MatIconModule, MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
