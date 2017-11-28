import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ReposComponent } from './repos/repos.component';

import { AuthGuard } from './../../_guards/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		component: UsuariosComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'details/:username',
		component: DetailsUserComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'repos/:full_name',
		component: ReposComponent,
		children: [
			{
				path: '',
				component: ReposComponent,
				canActivate: [AuthGuard],
				children:[
					{
						path: ':full_name',
						component: ReposComponent,
						canActivate: [AuthGuard]
					}
				]
			}
		],
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	providers:[]
})

export class UsuariosRoutingModule {}