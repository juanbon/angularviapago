import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { MicronautaRoutingModule } from './micronauta-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MicronautaRoutingModule,
    DynamicTableModule
  ]
})
export class MicronautaModule { }
