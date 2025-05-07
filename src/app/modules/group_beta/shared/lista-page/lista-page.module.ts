import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransaccionesComponent } from './transacciones.component';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../dynamic/dynamic-form/dynamic-form.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/dynamic-table.module';
import { ListaPageComponent } from './lista-page.component';


@NgModule({
  declarations: [
    ListaPageComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicTableModule
  ]
})
export class ListaPageModule { }
