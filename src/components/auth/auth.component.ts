import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	isLogged = true;
	isLoading = false;
	error: string = null;

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	onSwitchMode() {
		this.isLogged = !this.isLogged;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}

		const email = form.value.email;
		const password = form.value.password;

		this.isLoading = true;

		if (this.isLogged) {
			// ...
		} else {
			this.authService.signUp(email, password).subscribe(
				resData => {
					console.log(resData)
					this.isLoading = false
				},
				errorMessage => {
					console.log(errorMessage)
					this.error = errorMessage;
					this.isLoading = false
				}
			);
		}

		form.reset();
	}

}
