import { Injectable } from '@angular/core';
import { Http, Headers, Response, BaseRequestOptions } from '@angular/http';
import { AlertService } from './../_shared/index';
import { Observable } from 'rxjs';
import { Constants } from './../constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	private loginUrl : string;
	constructor(private alertService : AlertService){
		// para gravar a sessão no localStorage
		this.loginUrl = Constants.END_POINT;
	}
	
	// se esta logado
	isLoggedIn = false;
	// mensagem de erros
	msgError : any;
	// url para redirecionamento
	redirectUrl: string;

	// só injeta o nome no localStorage
	login(username: string): Observable<any>{	
		localStorage.setItem('userPet', username);
		this.isLoggedIn = true;			
		return Observable.of(true);
	}	

	logout(): void{
		localStorage.removeItem('userPet');
		this.isLoggedIn = false;
	}

}
