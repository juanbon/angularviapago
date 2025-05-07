import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchivosComponent } from './archivos/archivos.component';

const routes: Routes = [
  { path: 'archivos', component: ArchivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomeloRoutingModule { }
