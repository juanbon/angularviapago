import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransaccionesComponent } from './transacciones/transacciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosViaPagoComponent } from './usuarios-viapago/usuarios-viapago.component';
import { SaldosCierreComponent } from './saldos-cierre/saldos-cierre.component';


const routes: Routes = [
  { path: 'transacciones', component: TransaccionesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios-viapago', component: UsuariosViaPagoComponent },
  { path: 'saldos-cierre', component: SaldosCierreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilleteraRoutingModule { }
