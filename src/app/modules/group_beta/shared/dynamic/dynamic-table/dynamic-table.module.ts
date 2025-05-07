import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/table/table.component';
import { HeaderTableComponent } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/header-table/header-table.component';
import { DynamicFormModule } from 'src/app/modules/group_beta/shared/dynamic/dynamic-form/dynamic-form.module';
import { HeaderFilterComponent } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/header-filter/header-filter.component';
import { AppMaterialModule } from 'src/app/modules/group_beta/shared/dynamic/material/app.material.module';
import { ConfirmComponentComponent } from 'src/app/modules/group_beta/shared/dynamic/dynamic-table/confirm-component/confirm-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { ListCardComponent } from '../dynamic-card/list-card/list-card.component';
import { CardComponent } from '../dynamic-card/card/card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/es';

@NgModule({
  declarations: [
    TableComponent,
    HeaderTableComponent,
    HeaderFilterComponent,
    ConfirmComponentComponent,
    ListCardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DynamicFormModule,
    TranslateModule,
    AppMaterialModule,
    PipesModule,
    MomentModule,

  ],
  exports: [
    TableComponent,
    ListCardComponent,
    CardComponent,
    
  ]
})
export class DynamicTableModule { }
