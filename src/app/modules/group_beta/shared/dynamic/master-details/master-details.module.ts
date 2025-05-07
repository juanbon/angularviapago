import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { MasterDetailsRoutingModule } from './master-details-routing.module';



@NgModule({
  declarations: [
    MasterDetailsComponent
  ],
  imports: [
    CommonModule,
    MasterDetailsRoutingModule
  ]
})
export class MasterDetailsModule { }
