import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { TranslateModule } from '@ngx-translate/core';
import { UsuarioCrudComponent } from './usuario-crud/usuario-crud.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableModule } from '../shared/dynamic/dynamic-table/dynamic-table.module';
@NgModule({
  declarations: [
    UsuariosComponent,
     UsuarioDetalleComponent,
     UsuarioCrudComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    DynamicTableModule
  ],

})
export class UsuariosModule { }
