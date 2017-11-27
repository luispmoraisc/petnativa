import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RequestsService } from './../../requests.service';
import { User } from './../../../_models/index';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {

  constructor(
  	private route : ActivatedRoute,
  	private location : Location,
  	private reqService : RequestsService
  ) { }

  user : User = null;

  ngOnInit() {
  	document.getElementById('spinner').classList.remove('hidden');
  	this.getUser();
  }

  getUser(): void{
  	const user = this.route.snapshot.paramMap.get('username');
  	this.reqService.get<any>('users/'+user)
  		.subscribe(
  			(data) => {
  				document.getElementById('spinner').classList.add('hidden');
  				this.user = data;
  			}
  		)
  }

}
