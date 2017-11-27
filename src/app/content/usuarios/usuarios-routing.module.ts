import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
	{
		path: '',
		component: UsuariosComponent		
	},
	{
		path: 'details/:username',
		component: DetailsUserComponent
	},
	{
		path: 'repos/:full_name',
		component: ReposComponent,
		children: [
			{
				path: '',
				component: ReposComponent,
				children:[
					{
						path: ':full_name',
						component: ReposComponent
					}
				]
			}
		]
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