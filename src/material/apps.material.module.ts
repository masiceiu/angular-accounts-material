import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import {
  FormsModule, 
  ReactiveFormsModule
} from '@angular/forms';
import {CoreMaterialModule} from './core.material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './dialog/dialog-overview-example';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CoreMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    CoreMaterialModule,
    ReactiveFormsModule,
    DialogOverviewExample
  ],
  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  declarations: [
    DialogOverviewExample, 
    DialogOverviewExampleDialog
    ],
  providers: []
})
export class AppsMaterialModule {}