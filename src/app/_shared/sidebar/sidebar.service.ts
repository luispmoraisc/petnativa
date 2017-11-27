import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SidebarService{
	private subject = new Subject<any>();
	constructor(){}

	open : boolean;
	openSide(): Observable<any>{
		return this.subject.asObservable();
	}	

	sideBar(){				
		if(this.open === true)
			this.open = false;
		else
			this.open = true;
		this.subject.next(this.open);
	}
}