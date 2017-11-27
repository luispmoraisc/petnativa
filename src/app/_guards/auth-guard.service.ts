import { Injectable } from '@angular/core';
import { 
	Router, 
	CanActivate, 
	ActivatedRouteSnapshot, 
	RouterStateSnapshot 
} from '@angular/router';
import { AuthService } from './auth.service';
import { AlertService } from './../_shared/index'; 


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router, private alertService : AlertService) {}	

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;		
		return this.checkLogin(url);		
	}

	checkLogin(url: string): boolean {		
		var user = localStorage.getItem('user');
		if (user) { return true; }

		// Armazenar url de redirecionamento
		this.authService.redirectUrl = url;

		// Se não existe login redirecionar para login
		this.alertService.error("Você não está logado", true);
		this.router.navigate(['/login']);
		return false;
	}

	canLoad(route: Router): boolean{
		let url = '/${route.path}';
		return this.checkLogin(url);
	}
}
