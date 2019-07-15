import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from 'src/services/data-storage.service';
import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	authenticated = false;
	private userSub: Subscription;

	constructor(private dataStorage: DataStorageService, private authService: AuthService) { }

	ngOnInit() {
		this.userSub = this.authService.user.subscribe(user => {
			this.authenticated = !!user;
		});
	}

	onSaveRecipe() {
		this.dataStorage.saveRecipes();
	}

	onFetchRecipes() {
		this.dataStorage.fetchRecipes().subscribe();
	}

	onLogout() {
		this.authService.logout();
	}

	ngOnDestroy() {
		this.userSub.unsubscribe();
	}

}
