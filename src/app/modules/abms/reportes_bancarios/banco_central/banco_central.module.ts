import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { BancoCentralRoutingModule } from './banco_central-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { ApartadoComponent } from './apartado/apartado.component';



@NgModule({
  declarations: [
    ApartadoComponent
  ],
  imports: [
    CommonModule,
    BancoCentralRoutingModule,
    DynamicTableModule
  ]
})
export class BancoCentralModule { }
