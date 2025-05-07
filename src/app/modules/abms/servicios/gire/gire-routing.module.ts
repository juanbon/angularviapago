import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosYRecargasComponent } from './servicios-y-recargas/servicios-y-recargas.component';

const routes: Routes = [
  {path: 'servicios-y-recargas', component: ServiciosYRecargasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GireRoutingModule { }
