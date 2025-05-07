import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosViaticosComponent } from './pagos-viaticos/pagos-viaticos.component';
import { ViaticosYaguareteComponent } from './viaticos-yaguarete/viaticos-yaguarete.component';

const routes: Routes = [
  { path: 'pagos-viaticos', component: PagosViaticosComponent },
  { path: 'viaticos-yaguarete', component: ViaticosYaguareteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoferesRoutingModule { }
