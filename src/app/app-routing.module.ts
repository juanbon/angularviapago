import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* abms */
import { AbmsModule } from './modules/abms/abms.module';
/* group beta */
import { GroupBetaModule } from './modules/group_beta/group_beta.module';

const routes: Routes = [
  {
    path: 'b',
    loadChildren: () =>
      import('./modules/group_beta/group_beta.module').then(m => m.GroupBetaModule)
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./modules/abms/abms.module').then(m => m.AbmsModule)
  },
  {
    path: 'restore-password/:hash/:email',
    loadChildren: () =>
      import('src/app/modules/group_beta/security/restore-password/restore-password.module').then(m => m.RestorePasswordModule)
  },
  {
    path: 'master-details',
    loadChildren: () =>
      import('src/app/modules/group_beta/shared/dynamic/master-details/master-details.module').then(m => m.MasterDetailsModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/modules/group_beta/security/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    AbmsModule,
    GroupBetaModule
  ]
})
export class AppRoutingModule { }
