import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GroupBetaRoutingModule } from './group_beta-routing.module';

import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';
import { SharedModule } from "./shared/shared.module";
import { IdentidadesModule } from './identidades/identidades.module';
import { AbmsModule } from './shared/abms/abms.module';
import { ListaPageModule } from './shared/lista-page/lista-page.module';
import { DetallePageModule } from './shared/detalle-page/detalle-page.module';
import { AuthorizationModule } from './security/authorization/authorization.module';
import { AbmPageModule } from './shared/abm-page/abm-page.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { BeneficioDetalleComponent } from './comercios/beneficio-detalle/beneficio-detalle.component';
import { LogDetalleComponent } from './transacciones/log-detalle/log-detalle.component';
import { TarjetaComponent } from './tarjetas/tarjeta/tarjeta.component';
import { ContactoComponent } from './contactos/contacto/contacto.component';
import { CuentaComponent } from './cuentas/cuenta/cuenta.component';
import { PermisoComponent } from './identidades/permisos/permiso/permiso.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { ComercioDetalleComponent } from './comercios/comercio-detalle/comercio-detalle.component';
import { SucursalDetalleComponent } from './comercios/sucursal-detalle/sucursal-detalle.component';
import { DynamicFormModule } from './shared/dynamic/dynamic-form/dynamic-form.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        LogDetalleComponent,
        TarjetaComponent,
        ContactoComponent,
        CuentaComponent,
        PermisoComponent,
        MiCuentaComponent,
        ComercioDetalleComponent,
        BeneficioDetalleComponent,
        SucursalDetalleComponent,
        TarjetaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        GroupBetaRoutingModule,
        DynamicTableModule,
        DynamicFormModule,
        IdentidadesModule,
        ListaPageModule,
        DetallePageModule,
        AuthorizationModule,
        AbmPageModule,
        UsuariosModule,
        AbmsModule,
        SharedModule,
        TranslateModule
    ]
})
export class GroupBetaModule { }
