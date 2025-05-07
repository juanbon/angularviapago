import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* imports */
import { DynamicTableModule } from 'src/app/modules/group_beta/dynamic/dynamic-table/dynamic-table.module';
import { AbmsRoutingModule } from 'src/app/modules/abms/abms-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicTableModule,
    AbmsRoutingModule
  ],
  exports: []
})
export class AbmsModule { }
