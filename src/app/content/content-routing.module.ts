import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { AuthGuard } from './../_guards/auth-guard.service';

import { ResolverUsers } from './../_shared/index';

const routes: Routes = [
	{
		path: '',
		component: ContentComponent,
		children: [
			{ 
				path: 'dashboard', 
				loadChildren: './dashboard/dashboard.module#DashboardModule',
				canActivate: [AuthGuard]
			},		
			{
				path: 'usuarios',
				loadChildren: './usuarios/usuarios.module#UsuariosModule',
				canActivate: [AuthGuard],
				resolve: {
					listUsers : ResolverUsers
				}
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
	providers:[
		ResolverUsers
	]
})

export class ContentRoutingModule {}