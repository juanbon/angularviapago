import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrecuentesComponent } from './frecuentes/frecuentes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ImagesComponent } from './images/images.component';
import { RecargasComponent } from './recargas/recargas.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { TiposTerminosYCondicionesComponent } from './tipos-terminos-ycondiciones/tipos-terminos-ycondiciones.component';
import { NombresPspComponent } from './nombres-psp/nombres-psp.component';
import { FeeTaxConfigsComponent } from './feeTaxConfigs/feeTaxConfigs.component';


const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'frecuentes', component: FrecuentesComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'promociones', component: PromotionsComponent },
  { path: 'terminosycondiciones', component: TerminosycondicionesComponent },
  { path: 'tiposterminosycondiciones', component: TiposTerminosYCondicionesComponent },
  { path: 'motivos', component: ReasonsComponent },
  { path: 'nombrespsp', component: NombresPspComponent },
  { path: 'recargas', component: RecargasComponent },
  { path: 'feetaxconfigs', component: FeeTaxConfigsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
