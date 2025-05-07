import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { BilleteraRoutingModule } from './billetera-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosViaPagoComponent } from './usuarios-viapago/usuarios-viapago.component';
import { SaldosCierreComponent } from './saldos-cierre/saldos-cierre.component';

@NgModule({
  declarations: [
    TransaccionesComponent,
    UsuariosComponent,
    UsuariosViaPagoComponent,
    SaldosCierreComponent
  ],
  imports: [
    CommonModule,
    BilleteraRoutingModule,
    DynamicTableModule
  ]
})
export class BilleteraModule { }
