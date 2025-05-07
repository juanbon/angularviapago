import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractosComponent } from './extractos/extractos.component';

const routes: Routes = [
  { path: 'extractos', component: ExtractosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriamRoutingModule { }
