import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

// routes
import { AppRoutingModule } from './app-routing.module';

// services
import { AuthGuard } from './_guards/auth-guard.service';
import { AuthService } from './_guards/auth.service';
import { AlertService } from './_shared/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './_shared/alerts/alert.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        AlertService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
