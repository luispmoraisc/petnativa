import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from './../requests.service';
import { Users } from './../../_models/index';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private reqService : RequestsService
	) { }

	listUsers : Users[] = [];
	filterString: string;
	ngOnInit() {
		let user = localStorage.getItem('userPet');
		if(user === null || user === undefined)
			this.router.navigate(['/entrar']);
		this.listUsers = this.route.snapshot.data['listUsers'];
	}

	removeUser(index){
		this.listUsers.splice(index, 1);
	}
}
