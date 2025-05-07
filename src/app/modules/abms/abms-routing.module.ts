import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'aplicacion',
        loadChildren: () =>
          import('./aplicacion/aplicacion.module').then(m => m.AplicacionModule)
      },
      {
        path: 'bancarios',
        loadChildren: () =>
          import('./reportes_bancarios/reportes_bancarios.module').then(m => m.ReportesBancariosModule)
      },
      {
        path: 'administrativos',
        loadChildren: () =>
          import('./administrativos/administrativos.module').then(m => m.AdministrativosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'empresas',
        loadChildren: () =>
          import('./empresas/empresas.module').then(m => m.EmpresasModule)
      },
      {
        path: 'servicios',
        loadChildren: () =>
          import('./servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'sistemas',
        loadChildren: () =>
          import('./sistemas/sistemas.module').then(m => m.SistemasModule )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AbmsRoutingModule { }
