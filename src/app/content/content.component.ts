import { Component, OnInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart,NavigationEnd,NavigationCancel,NavigationError} from '@angular/router';

import { AlertService } from './../_shared/index';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']	
})
export class ContentComponent implements OnInit {

	constructor(
		public router: Router,
		private alertService : AlertService
	){
		router.events.subscribe((event: RouterEvent) => {this.navigationInterceptor(event)});
	}

	navigationInterceptor(event: RouterEvent){
		if (event instanceof NavigationStart) {
			this.hiddenSpinner();
		}
		if (event instanceof NavigationEnd) {
			this.hiddenSpinner();
		}		
		if (event instanceof NavigationCancel) {
			this.hiddenSpinner();
		}
		if (event instanceof NavigationError) {
			this.hiddenSpinner();
		}
	}

	ngOnInit() {
		this.hiddenSpinner();
		// garantindo o redirecionamento caso o usuário apague o caminho
		if(this.router.url === '/'){
			this.router.navigate(['/dashboard']);
		}
	}

	hiddenSpinner(){
		document.getElementById('spinner').classList.add('hidden');	
	}

}
