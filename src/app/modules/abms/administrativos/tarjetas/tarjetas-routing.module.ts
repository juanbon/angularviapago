import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockprepagasComponent } from './stockprepagas/stockprepagas.component';

const routes: Routes = [
  { path: 'stockprepagas', component: StockprepagasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetasRoutingModule { }
