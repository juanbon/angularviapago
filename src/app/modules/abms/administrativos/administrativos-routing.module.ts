import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypestransactionsComponent } from './typestransactions/typestransactions.component';
import { ConfigComponent } from './config/config.component';
import { CountriesComponent } from './countries/countries.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { LocalitiesComponent } from './localities/localities.component';
import { PostalcodesComponent } from './postalcodes/postalcodes.component';
import { ReporteConsolidadoComponent } from './reporteconsolidado/reporteconsolidado.component';
import { AjustesmanualesComponent } from './ajustesmanuales/ajustesmanuales.component';

 

const routes: Routes = [
{ path: 'typestransactions', component: TypestransactionsComponent },
{ path: 'config', component: ConfigComponent },{ path: '' ,  children: [
      {
        path: 'tarjetas',
        loadChildren: () =>
          import('./tarjetas/tarjetas.module').then(m => m.TarjetasModule)
      }
    ] },
{ path: 'countries', component: CountriesComponent },
{ path: 'provinces', component: ProvincesComponent },
{ path: 'localities', component: LocalitiesComponent },
{ path: 'postalcodes', component: PostalcodesComponent },
{ path: 'consolidadoestado', component: ReporteConsolidadoComponent },
{ path: 'ajustesmanuales', component: AjustesmanualesComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativosRoutingModule { }
