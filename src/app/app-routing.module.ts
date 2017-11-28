import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// guards
import { AuthGuard } from './_guards/auth-guard.service'

const appRoutes: Routes = [
	{ 
		path: '', 
		loadChildren: './content/content.module#ContentModule',
		canActivate: [AuthGuard]
	},
    { 
    	path: 'entrar', 
    	component: LoginComponent
    },
    { 
    	path: '**', 
    	redirectTo: 'entrar'
    }   
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}