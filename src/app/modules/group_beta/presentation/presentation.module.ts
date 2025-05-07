import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSnackbarComponent } from './components/message-snackbar/message-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    MessageSnackbarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class PresentationModule { }
