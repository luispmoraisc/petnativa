import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { BreadcrumbModule } from './../../_shared/index';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ReposComponent } from './repos/repos.component';

import { Filter } from './../pipeFilter';

@NgModule({
	imports: [
		CommonModule,
		UsuariosRoutingModule,
		FormsModule,
		BreadcrumbModule
	],
	declarations: [
		UsuariosComponent,
		DetailsUserComponent,
		Filter,
		ReposComponent
    ],	
	providers:[Filter]
})

export class UsuariosModule {}