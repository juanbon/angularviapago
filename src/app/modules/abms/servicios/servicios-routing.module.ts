import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'choferes',
        loadChildren: () =>
          import('./choferes/choferes.module').then(m => m.ChoferesModule)
      },
      {
        path: 'gire',
        loadChildren: () =>
          import('./gire/gire.module').then(m => m.GireModule)
      },
      {
        path: 'micronauta',
        loadChildren: () =>
          import('./micronauta/micronauta.module').then(m => m.MicronautaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
