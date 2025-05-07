import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/modules/group_beta/security/authorization/login/login.component';
import { AuthorizationRoutingModule } from 'src/app/modules/group_beta/security/authorization/authorization-routing.module';
import { SendEmailComponent } from './send-email/send-email.component';



@NgModule({
  declarations: [
    LoginComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthorizationModule { }
