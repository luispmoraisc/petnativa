import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { RequestsService } from './../../requests.service';

@Component({
	selector: 'app-repos',
	templateUrl: './repos.component.html',
	styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

	constructor(
		private route : ActivatedRoute,
		private location : Location,
		private reqService : RequestsService,
		private url : LocationStrategy
		) { }

	repos : any;
	ngOnInit() {
		document.getElementById('spinner').classList.remove('hidden');
		this.getRepos();
	}

	getRepos():void{		
		let repo = this.url.path().split('/');
		let user = this.route.params.subscribe((params: Params) => {
			this.reqService.get<any>('repos/' + params['full_name'] +'/'+ repo[4])
				.subscribe((data)=>{
					this.repos = data;
					document.getElementById('spinner').classList.add('hidden');
				})
		})		
	}

}
