import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { Constants } from './../constants';
import { AlertService } from './../_shared/index';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class RequestsService{
    private requests$ : BehaviorSubject<any[]>;     
    private url : string;
    timer : number;
    constructor(
        public http: HttpClient,
        private router : Router,
        public serviceAlert : AlertService        
    ){
        this.url = Constants.END_POINT;
    }

    

    get<T>(url: string): Observable<any> {                
        return this.http.get<T>(this.url + url)
            .catch((err: any) => {                          
                return this.errors(err);
            });
    }

    post<T>(url: string, body: string): Observable<any> {
        return this.http.post<T>(this.url + url, body)
            .map(req => {
                return req;
            })              
            .catch((err) =>{
                return this.errors(err);
            });
    }

    put<T>(url: string, body: string): Observable<any> {
        return this.http.put<T>(this.url + url, body)
            .catch((err) =>{
                return this.errors(err);
            });
    }

    delete<T>(url: string): Observable<any> {
        return this.http.delete<T>(this.url + url)
            .catch((err) =>{
                return this.errors(err);
            });
    }

    patch<T>(url: string, body: string): Observable<any> {
        return this.http.patch<T>(url, body)
            .catch((err) =>{
                return this.errors(err);
            });;
    }

    errors(error){        
        if (error.status === 500) {            
            document.getElementById('spinner').classList.add('hidden');
            this.serviceAlert.error("Erro no servidor", true);                    
            return Observable.of(error);
        }
        else if(error.status === 401){   
            document.getElementById('spinner').classList.add('hidden');
            this.serviceAlert.error("Seu token expirou, estamos te redirecionando");                     
            this.router.navigate(['/login']);                           
            return Observable.of(error);
        }
        else if(error.status === 400){     
            document.getElementById('spinner').classList.add('hidden');
            this.serviceAlert.error("Bad Request", true);                    
            return Observable.of(error);
        }else{
            // caso onde o retorno é 200 mas o ok está como false
            return Observable.of(error);
        }
    }
}

