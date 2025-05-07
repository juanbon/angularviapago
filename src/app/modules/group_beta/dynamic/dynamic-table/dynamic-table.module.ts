import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from 'src/app/modules/group_beta/dynamic/dynamic-table/table/table.component';
import { HeaderTableComponent } from 'src/app/modules/group_beta/dynamic/dynamic-table/header-table/header-table.component';
import { DynamicFormModule } from 'src/app/modules/group_beta/dynamic/dynamic-form/dynamic-form.module';
import { HeaderFilterComponent } from 'src/app/modules/group_beta/dynamic/dynamic-table/header-filter/header-filter.component';
import { AppMaterialModule } from 'src/app/modules/group_beta/dynamic/material/app.material.module';
import { ConfirmComponentComponent } from 'src/app/modules/group_beta/dynamic/dynamic-table/confirm-component/confirm-component.component';
import { LogsModificaciones } from 'src/app/modules/group_beta/dynamic/dynamic-table/logs-modificaciones/logs-modificaciones.component';


@NgModule({
  declarations: [
    TableComponent,
    HeaderTableComponent,
    HeaderFilterComponent,
    ConfirmComponentComponent,
    LogsModificaciones
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DynamicFormModule,
    AppMaterialModule
  ],
  exports: [
    TableComponent,
  ]
})
export class DynamicTableModule { }
