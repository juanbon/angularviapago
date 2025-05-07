import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { TriamRoutingModule } from './triam-routing.module';
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';
import { ExtractosComponent } from './extractos/extractos.component';

/* declarations */

@NgModule({
  declarations: [
    ExtractosComponent
  ],
  imports: [
    CommonModule,
    TriamRoutingModule,
    DynamicTableModule
  ]
})
export class TriamModule { }
