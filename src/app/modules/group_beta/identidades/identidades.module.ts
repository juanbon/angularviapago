import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentidadesComponent } from './identidades.component';
import { SharedModule } from '../shared/shared.module';
import { IdentidadDetalleComponent } from './identidad-detalle/identidad-detalle.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IdentidadCrudComponent } from './identidad-crud/identidad-crud.component';
import { DynamicFormModule } from '../shared/dynamic/dynamic-form/dynamic-form.module';
import { DynamicTableModule } from '../shared/dynamic/dynamic-table/dynamic-table.module';

@NgModule({
  declarations: [
    IdentidadesComponent, 
    IdentidadDetalleComponent, 
    IdentidadCrudComponent],
  imports: [
    CommonModule, 
    SharedModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicTableModule
  ],
    
})
export class IdentidadesModule {}