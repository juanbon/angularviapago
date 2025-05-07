import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';

/* declarations */
import { UsuariosComponent } from './users/users.component';
import { MonitoreoSaldosComponent } from './monitoreo-saldos/monitoreo-saldos.component';

@NgModule({
    declarations: [
        UsuariosComponent,
        MonitoreoSaldosComponent
    ],
    imports: [
        CommonModule,
        UsuariosRoutingModule,
        DynamicTableModule
    ]
})
export class UsuariosModule { }
