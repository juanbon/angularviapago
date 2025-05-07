import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { PomeloRoutingModule } from './pomelo-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { ArchivosComponent } from './archivos/archivos.component';



@NgModule({
  declarations: [
    ArchivosComponent
  ],
  imports: [
    CommonModule,
    PomeloRoutingModule,
    DynamicTableModule
  ]
})
export class PomeloModule { }
