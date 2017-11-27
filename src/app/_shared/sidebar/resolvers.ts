import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AlertService } from './../../_shared/index';
import { Observable } from 'rxjs';
import { RequestsService } from './../../content/requests.service';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class ResolverUsers{
	private url : string;
	constructor(
		public http: HttpClient, 
		private router : Router,
		private req : RequestsService){
	}
	resolve(state: RouterStateSnapshot): Observable<any>{				
		return this.req.get<any>('users');				
	}
}
// demais resolvers do sidebar