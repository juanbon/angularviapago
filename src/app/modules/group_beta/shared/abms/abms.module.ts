import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableModule } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/dynamic-table.module';
import { AbmsRoutingModule } from 'src/app/modules/group_beta/shared/abms/abms-routing.module';

import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent,
  ],
  imports: [
    CommonModule,
    DynamicTableModule,
    AbmsRoutingModule
  ],
  exports: []
})
export class AbmsModule { }
