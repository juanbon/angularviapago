import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/group_beta/security/authorization/login/login.component';
import { SendEmailComponent } from 'src/app/modules/group_beta/security/authorization/send-email/send-email.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: LoginComponent
			},
			{
				path: 'send-email',
				component: SendEmailComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
