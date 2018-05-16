import { NgModule } from '@angular/core';

import {
  MatCardModule, MatGridListModule, MatExpansionModule, MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatExpansionModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
