import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FiltroComponent } from './filtro/filtro.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DynamicTableModule } from './dynamic/dynamic-table/dynamic-table.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  declarations: [
    FiltroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    DynamicTableModule,
    TranslateModule,
    PipesModule,

  ],
  exports: [
    FiltroComponent
  ]
})
export class SharedModule { }
