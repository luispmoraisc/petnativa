import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { AuthService } from './_guards/auth.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from "@angular/common/http";

@Injectable()
export class AppInterceptor implements HttpInterceptor {    
    constructor(
        private router: Router,
        private injector: Injector,
        public auth : AuthService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        document.getElementById('spinner').classList.remove('hidden');
        return next.handle(req);
        
    }
}