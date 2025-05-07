import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableModule } from '../../group_beta/dynamic/dynamic-table/dynamic-table.module';
import { SistemasRoutingModule } from './sistemas-routing.module';

/* declarations */
import { PermisosComponent } from './permisos/permisos.component';
import { PermisosUsuariosComponent } from './permisos-usuarios/permisos-usuarios.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    PermisosComponent,
    PermisosUsuariosComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DynamicTableModule,
    SistemasRoutingModule
  ]
})
export class SistemasModule { }
