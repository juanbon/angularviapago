import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDetailsComponent } from './master-details/master-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MasterDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MasterDetailsRoutingModule { }
