import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { BindRoutingModule } from './bind-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { ArchivosComponent } from './archivos/archivos.component';



@NgModule({
  declarations: [
    ArchivosComponent
  ],
  imports: [
    CommonModule,
    BindRoutingModule,
    DynamicTableModule
  ]
})
export class BindModule { }
