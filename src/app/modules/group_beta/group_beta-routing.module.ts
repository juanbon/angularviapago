import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessGuard } from 'src/app/guards/access.guard';
import { ListaPageComponent } from './shared/lista-page/lista-page.component';
import { AbmPageComponent } from './shared/abm-page/abm-page.component';
import { DetallePageComponent } from './shared/detalle-page/detalle-page.component';
import { IdentidadDetalleComponent } from './identidades/identidad-detalle/identidad-detalle.component';
import { PermisoComponent } from './identidades/permisos/permiso/permiso.component';
import { LogDetalleComponent } from './transacciones/log-detalle/log-detalle.component';
import { TarjetaComponent } from './tarjetas/tarjeta/tarjeta.component';
import { ContactoComponent } from './contactos/contacto/contacto.component';
import { CuentaComponent } from './cuentas/cuenta/cuenta.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { ComercioDetalleComponent } from './comercios/comercio-detalle/comercio-detalle.component';
import { BeneficioDetalleComponent } from './comercios/beneficio-detalle/beneficio-detalle.component';
import { SucursalDetalleComponent } from './comercios/sucursal-detalle/sucursal-detalle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'identidades', component: ListaPageComponent,canActivate: [], data: { privilege: []} },
      { path: 'identidad-detalle/:id', component: IdentidadDetalleComponent, canActivate: [], data: { privilege: []} },
      { path: 'identidad-create', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'identidad-update/:id', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'permisos-create', component: PermisoComponent, canActivate: [], data: { privilege: []} },
      { path: 'permisos-editar', component: PermisoComponent, canActivate: [], data: { privilege: []} },
      { path: 'permisos-ver', component: PermisoComponent, canActivate: [], data: { privilege: []} },
      { path: 'usuarios', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'usuario-detalle/:id', component: DetallePageComponent, canActivate: [], data: { privilege: []} },
      { path: 'usuario-create', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'usuario-update/:id', component: AbmPageComponent, canActivate: [], data: {privilege: []} },
      { path: 'transacciones', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'transaccion-lista/:id', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'transaccion/:id', component: DetallePageComponent, canActivate: [], data: { privilege: []} },
      { path: 'transaccion/log/:id', component: LogDetalleComponent, canActivate: [], data: { privilege: []} },
      { path: 'notificaciones', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'bind', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'tarjetas', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'tarjeta-detalle/:id', component: TarjetaComponent, canActivate: [], data: { privilege: []} },
      { path: 'contactos', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'contacto-detalle/:id', component: ContactoComponent, canActivate: [], data: { privilege: []} },
      { path: 'contacto-update/:id', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'cuentas', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'cuenta-detalle/:id', component: CuentaComponent, canActivate: [], data: { privilege: []} },
      { path: 'mi-cuenta', component: MiCuentaComponent, canActivate: [], data: { privilege: []} },
      { path: 'mi-cuenta-edit/:id', component: MiCuentaComponent, canActivate: [], data: { privilege: []} },
      { path: 'comercios', component: ListaPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'comercio-detalle/:id', component: ComercioDetalleComponent, canActivate: [], data: { privilege: []} },
      { path: 'comercio-create', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'comercio-update/:id', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'beneficio-create/:idComercio', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'beneficio-update/:id', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'beneficio-detalle/:id', component: BeneficioDetalleComponent, canActivate: [], data: { privilege: []} },
      { path: 'sucursal-create/:idComercio', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'sucursal-update/:id', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'sucursal-detalle/:id', component: SucursalDetalleComponent, canActivate: [], data: { privilege: []} },
      { path: 'punto-de-venta-create/:idSucursal', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
      { path: 'punto-de-venta-detalle/:id', component: DetallePageComponent, canActivate: [], data: { privilege: []} },
      { path: 'punto-de-venta-update/:id/:comercio/:sucursal', component: AbmPageComponent, canActivate: [], data: { privilege: []} },
    ]

/*
    children: [
      { path: 'identidades', component: ListaPageComponent,canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'identidad-detalle/:id', component: IdentidadDetalleComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'identidad-create', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'identidad-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'permisos-create', component: PermisoComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'permisos-editar', component: PermisoComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'permisos-ver', component: PermisoComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'usuarios', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'usuario-detalle/:id', component: DetallePageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'usuario-create', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'usuario-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: {privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'transacciones', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'transaccion-lista/:id', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'transaccion/:id', component: DetallePageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'transaccion/log/:id', component: LogDetalleComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'notificaciones', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'bind', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'tarjetas', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'tarjeta-detalle/:id', component: TarjetaComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'contactos', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'contacto-detalle/:id', component: ContactoComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'contacto-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'cuentas', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'cuenta-detalle/:id', component: CuentaComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'mi-cuenta', component: MiCuentaComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'mi-cuenta-edit/:id', component: MiCuentaComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'comercios', component: ListaPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'comercio-detalle/:id', component: ComercioDetalleComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'comercio-create', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'comercio-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'beneficio-create/:idComercio', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'beneficio-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'beneficio-detalle/:id', component: BeneficioDetalleComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'sucursal-create/:idComercio', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'sucursal-update/:id', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'sucursal-detalle/:id', component: SucursalDetalleComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'punto-de-venta-create/:idSucursal', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'punto-de-venta-detalle/:id', component: DetallePageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
      { path: 'punto-de-venta-update/:id/:comercio/:sucursal', component: AbmPageComponent, canActivate: [AccessGuard], data: { privilege: ['administrator', 'operator', 'supervisor']} },
    ]



    */


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupBetaRoutingModule { }
