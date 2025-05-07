import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestorePasswordRoutingModule } from './restore-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestorePasswordComponent } from './restore-password/restore-password.component';

@NgModule({
  declarations: [
    RestorePasswordComponent
  ],
  imports: [
    CommonModule,
    RestorePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RestorePasswordModule { }
