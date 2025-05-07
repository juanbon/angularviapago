import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportedetalleComponent } from './reportedetalle/reportedetalle.component';
import { ReporteloteComponent } from './reportelote/reportelote.component';




const routes: Routes = [
  { path: 'reportedetalle', component: ReportedetalleComponent },
  { path: 'reportelote', component: ReporteloteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoelsaRoutingModule { }

