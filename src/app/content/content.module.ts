import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { NavComponent, SidebarComponent, SidebarService } from './../_shared/index'; 

import { RequestsService } from './requests.service';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppInterceptor } from './../app.interceptor';


@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ContentRoutingModule,		
		FormsModule
	],
	declarations: [
		ContentComponent,
		NavComponent,
		SidebarComponent
    ],	
	providers:[
		SidebarService,
		RequestsService,
		{
	      	provide: HTTP_INTERCEPTORS,
	      	useClass: AppInterceptor,
	      	multi: true
	    },
	]
})

export class ContentModule {}