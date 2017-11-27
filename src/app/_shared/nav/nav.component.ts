import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { SidebarService } from './../sidebar/sidebar.service';
@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(
		private _eref: ElementRef,
		private sideBar : SidebarService
	) { }

	user: string;
	dropdownUser: boolean = false;
	dropdownNotification: boolean = false;
	open : boolean = true;
	screenW : any = (window.screen.availWidth);
	ngOnInit() {
		if(this.screenW < 768){
			this.open = false;
		}
		this.user = localStorage.getItem('user');
	}

	@HostListener('document:click',['$event'])
	click(event){
		if(this._eref.nativeElement.contains(event.target))
			return;
		else
			this.closeDropDown();
	}

	dropdown(option){
		switch (option) {
			case "user":
				if(this.dropdownUser === true)
					this.dropdownUser = false;
				else
					this.dropdownUser = true;
				this.dropdownNotification = false;				
				break;			
			case "notifications":
				if(this.dropdownNotification === true)
					this.dropdownNotification = false;
				else
					this.dropdownNotification = true;
				this.dropdownUser = false;
				break;			
		}
	}

	closeDropDown(){
		this.dropdownUser = false;
		this.dropdownNotification = false;
	}

	toggle(){
		this.sideBar.sideBar();
		if(this.open === false){
			this.open = true;
			document.getElementById('content').classList.remove('collapse');
		}
		else{
			this.open = false;		
			document.getElementById('content').classList.add('collapse');
		}
	}

	cssCollapse(){
		if(this.open === false)
			return 'collapse'
		else
			return '';
	}

}
