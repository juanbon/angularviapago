import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartadoComponent } from './apartado/apartado.component';

const routes: Routes = [
  { path: 'apartado', component: ApartadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoCentralRoutingModule { }
