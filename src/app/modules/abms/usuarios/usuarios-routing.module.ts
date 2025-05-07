import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './users/users.component';
import { MonitoreoSaldosComponent } from './monitoreo-saldos/monitoreo-saldos.component';

const routes: Routes = [
  { path: 'users', component: UsuariosComponent },
  { path: 'monitoreo-saldos', component: MonitoreoSaldosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
