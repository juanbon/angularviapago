import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { AdministrativosRoutingModule } from './administrativos-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { TypestransactionsComponent } from './typestransactions/typestransactions.component';
import { ConfigComponent } from './config/config.component';
import { CountriesComponent } from './countries/countries.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { LocalitiesComponent } from './localities/localities.component';
import { PostalcodesComponent } from './postalcodes/postalcodes.component';
import { ReporteConsolidadoComponent } from './reporteconsolidado/reporteconsolidado.component';
import { AjustesmanualesComponent } from './ajustesmanuales/ajustesmanuales.component';


@NgModule({
  declarations: [
  TypestransactionsComponent,
  ConfigComponent,
  CountriesComponent,
  ProvincesComponent,
  LocalitiesComponent,
  PostalcodesComponent,
  ReporteConsolidadoComponent,
  AjustesmanualesComponent
  ],
  imports: [
    CommonModule,
    AdministrativosRoutingModule,
    DynamicTableModule
  ]
})
export class AdministrativosModule { }
