import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'central',
        loadChildren: () =>
          import('./banco_central/banco_central.module').then(m => m.BancoCentralModule)
      },
      {
        path: 'bind',
        loadChildren: () =>
          import('./bind/bind.module').then(m => m.BindModule)
      },
      {
        path: 'coelsa',
        loadChildren: () =>
          import('./coelsa/coelsa.module').then(m => m.CoelsaModule)
      },
      {
        path: 'pomelo',
        loadChildren: () =>
          import('./pomelo/pomelo.module').then(m => m.PomeloModule)
      },
      {
        path: 'triam',
        loadChildren: () =>
          import('./triam/triam.module').then(m => m.TriamModule)
      },
      {
        path: 'billetera',
        loadChildren: () =>
          import('./billetera/billetera.module').then(m => m.BilleteraModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesBancariosRoutingModule { }
