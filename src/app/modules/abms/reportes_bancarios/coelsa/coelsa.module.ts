import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { CoelsaRoutingModule } from './coelsa-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

import { ReportedetalleComponent } from './reportedetalle/reportedetalle.component';
import { ReporteloteComponent } from './reportelote/reportelote.component';

/* declarations */

@NgModule({
  declarations: [
  ReportedetalleComponent,
  ReporteloteComponent],
  imports: [
    CommonModule,
    CoelsaRoutingModule,
    DynamicTableModule
  ]
})
export class CoelsaModule { }
