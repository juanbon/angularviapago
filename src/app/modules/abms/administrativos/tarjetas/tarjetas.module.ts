import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { TarjetasRoutingModule } from './tarjetas-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { StockprepagasComponent } from './stockprepagas/stockprepagas.component';



@NgModule({
  declarations: [
    StockprepagasComponent
  ],
  imports: [
    CommonModule,
    TarjetasRoutingModule,
    DynamicTableModule
  ]
})
export class TarjetasModule { }
