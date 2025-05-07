import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { GireRoutingModule } from './gire-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { ServiciosYRecargasComponent } from './servicios-y-recargas/servicios-y-recargas.component';


@NgModule({
  declarations: [
    ServiciosYRecargasComponent
  ],
  imports: [
    CommonModule,
    GireRoutingModule,
    DynamicTableModule
  ]
})
export class GireModule { }
