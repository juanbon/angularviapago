import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { FrecuentesComponent } from './frecuentes/frecuentes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ImagesComponent } from './images/images.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { TiposTerminosYCondicionesComponent } from './tipos-terminos-ycondiciones/tipos-terminos-ycondiciones.component';
import { NombresPspComponent } from './nombres-psp/nombres-psp.component';
import { RecargasComponent } from './recargas/recargas.component';
import { FeeTaxConfigsComponent } from './feeTaxConfigs/feeTaxConfigs.component';


@NgModule({
  declarations: [
    FrecuentesComponent,
    CategoriasComponent,
    ImagesComponent,
    PromotionsComponent,
    TerminosycondicionesComponent,
    ReasonsComponent,
    TiposTerminosYCondicionesComponent,
    NombresPspComponent,
    RecargasComponent,
    FeeTaxConfigsComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    DynamicTableModule
  ]
})
export class AplicacionModule { }
