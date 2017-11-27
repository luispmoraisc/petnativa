import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RequestsService } from './../../requests.service';
import { User } from './../../../_models/index';
import { Filter } from './../../pipeFilter';

@Component({
	selector: 'app-details-user',
	templateUrl: './details-user.component.html',
	styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

	constructor(
		private route : ActivatedRoute,
		private location : Location,
		private reqService : RequestsService,
		private filtrar : Filter
		) { }

	user : User = null;
	listRepos : any = [];
	filterOrder : boolean = false;
	start: number = 0;
	end : number = 10;
	startPagination = 0;
	endPagination = 10;
	amostras : any[];	
	nPages : number;
	pagination : any[];
	pagAtual : number = 1;	
	itensPage : number = 10;	
	nActions : number;
	
	ngOnInit() {
		document.getElementById('spinner').classList.remove('hidden');
		this.getUser();
		this.amostras = [{"key" : 10},{"key":25},{"key":50},{"key":100}];  	
	}

	getUser(): void{
		const user = this.route.snapshot.paramMap.get('username');
		this.reqService.get<User>('users/'+user)
		.subscribe(
			(data) => {  				
				this.user = data;
				this.reqService.get<any>('users/'+user +'/repos')
				.subscribe(
					(data) => {											
						this.ordenar(data);
					}
				)
			}
		)
	}

	reordenar(val){
		if(val === 0){
			this.filterOrder = false;
			this.ordenar(this.listRepos);
		}else{
			this.filterOrder = true;
			this.ordenar(this.listRepos);
		}
	}

	ordenar(repos){	
		var order;
		if(this.filterOrder === false){		
			order = repos.sort((a,b) => {									
				if(Number(a['stargazers_count']) < Number(b['stargazers_count'])) return 1;					
				else if(Number(a['stargazers_count']) > Number(b['stargazers_count'])) return -1;
				else return 0;				
			});
		}else{
			order = repos.reverse();
		}
		this.listRepos = order;
		document.getElementById('spinner').classList.add('hidden');
		this.nPages = Math.ceil(this.listRepos.length / this.end);
		this.Pagination();
	}

	visualizacao(value){				
		this.end = value;
		this.itensPage = value;		
		// number pages
		this.nPages = Math.ceil(this.listRepos.length / this.end);
		this.Pagination();
	}	

	Pagination(){
		var pags = [];
		for(let i = 1; i <= this.nPages; i++){
			pags.push({'pag':i});
		}

		this.pagination = pags;
		if(this.pagAtual > this.nPages){
			this.pagAtual = this.nPages;
			this.start = (this.nPages * this.itensPage) - this.itensPage;
			this.end = (this.nPages * this.itensPage);
		}
	}

	mudarPagina(value){		
		this.start = (value * this.itensPage) - this.itensPage;
		this.end = (value * this.itensPage);				
		this.pagAtual = value;	
		if(this.pagAtual >= 5){
			this.startPagination = this.pagAtual - 5;
			this.endPagination = this.pagAtual + 5;
			console.log("Entrei aqui");
		}
	}

	PrevPage(){
		if(this.pagAtual !== 1)
			this.pagAtual -= 1;
		this.mudarPagina(this.pagAtual);
	}

	NextPage(){
		if(this.pagAtual !== this.nPages)
			this.pagAtual += 1;
		this.mudarPagina(this.pagAtual);
	}	

	filtrarTabela(ev){		
		setTimeout(() => {
			if(ev.keyCode > 46 && ev.keyCode <= 90 || ev.keyCode === 8 || ev.keyCode === 32 || (ev.keyCode >= 96 && ev.keyCode <= 105)){
				var elementos = this.filtrar.transform(this.listRepos,ev.target.value,this.listRepos);	
				if(elementos.length > 0){		
					this.nPages = Math.ceil( elementos.length / this.end);
					this.Pagination();
				}else{
					this.nPages = 1;
					this.Pagination();
				}			
			}
		}, 500);		
	}
}
