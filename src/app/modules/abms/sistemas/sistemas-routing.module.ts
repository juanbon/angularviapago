import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermisosComponent } from './permisos/permisos.component';
import { PermisosUsuariosComponent } from './permisos-usuarios/permisos-usuarios.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'permisos', component:PermisosComponent},
  { path: 'permisos-usuarios', component: PermisosUsuariosComponent},
  { path: 'menu' , component: MenuComponent}
     
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class SistemasRoutingModule { }
