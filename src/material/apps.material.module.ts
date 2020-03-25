import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './dialog/dialog-overview-example';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  declarations: [
    DialogOverviewExample, 
    DialogOverviewExampleDialog
    ],
  providers: []
})
export class AppsMaterialModule {}