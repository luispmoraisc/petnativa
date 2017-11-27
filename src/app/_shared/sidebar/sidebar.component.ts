import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sideService : SidebarService) { }

  user : string;
  open : boolean;
  screenW : any = (window.screen.availWidth);
  ngOnInit() {

  	this.user = localStorage.getItem('user');
  	this.sideService.openSide().subscribe((status) => {  		
  		if(status){
  			this.open = false;
      }
  		else
  			this.open = true;
	});
  }

  closeSidebar(){
    this.sideService.sideBar();
  }

  cssClass(){
  	if(this.open === false)
  		return 'collapse';
  	else
  		return '';
  }
}
