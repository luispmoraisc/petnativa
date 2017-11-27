import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
	{
		path: '',
		component: UsuariosComponent		
	},
	{
		path: 'details/:username',
		component: DetailsUserComponent
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