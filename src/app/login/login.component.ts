import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../_guards/auth.service';
import { AlertService } from './../_shared/index';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private router 			: Router,
		private authService 	: AuthService,
		private alertService 	: AlertService
	){}

	ngOnInit() {
		setInterval(() => {
			document.getElementById('spinner').classList.add('hidden');					
		}, 1000);
	}

	login(ev){
		if(ev.keyCode === 13){			
			this.authService.login(ev.target.value)
				.subscribe(() => {					
					if(this.authService.isLoggedIn){						
						let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
						this.router.navigate([redirect]);
					}else{
						console.log("Entrei aqui");
						this.alertService.error("Ocorreu um erro ao fazer login");
					}
				})
			document.getElementById('spinner').classList.remove('hidden');	
			this.router.navigate(['/dashboard']);
		}
	}

}
