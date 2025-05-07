import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { ServiciosRoutingModule } from './servicios-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    DynamicTableModule
  ]
})
export class ServiciosModule { }
