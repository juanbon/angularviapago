import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { ChoferesRoutingModule } from './choferes-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { PagosViaticosComponent } from './pagos-viaticos/pagos-viaticos.component';
import { ViaticosYaguareteComponent } from './viaticos-yaguarete/viaticos-yaguarete.component';


@NgModule({
  declarations: [
    PagosViaticosComponent,
    ViaticosYaguareteComponent
  ],
  imports: [
    CommonModule,
    ChoferesRoutingModule,
    DynamicTableModule
  ]
})
export class ChoferesModule { }
