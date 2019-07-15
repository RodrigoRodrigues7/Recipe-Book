import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { API_CONFIG } from 'src/app/api.config';
import { User } from 'src/components/auth/user.model';

export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {

	user = new BehaviorSubject<User>(null);

	constructor(private http: HttpClient, private router: Router) { }

	signUp(email: string, password: string) {
		return this.http.post<AuthResponseData>(
			API_CONFIG.firebaseSignUpUrl,
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		).pipe(catchError(this.handleError), tap(resData => {
			this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
		}))
	};

	login(email: string, password: string) {
		return this.http.post<AuthResponseData>(
			API_CONFIG.firebaseLogInUrl,
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		).pipe(catchError(this.handleError), tap(resData => {
			this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
		}))
	};

	autoLogin() {
		const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData'))
		if (!userData) { return; }

		const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
		if (loadedUser.token) {
			this.user.next(loadedUser)
			console.log(loadedUser);
		}
	};

	logout() {
		this.user.next(null);
		this.router.navigate(['/authentication']);
	}

	private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(email, userId, token, expirationDate)
		this.user.next(user)
		localStorage.setItem('userData', JSON.stringify(user))
	}

	private handleError(errorRes: HttpErrorResponse) {
		let errorMessage = 'An unknown erro occured!'
		if (!errorRes.error || !errorRes.error.error) {
			return throwError(errorMessage);
		}
		switch (errorRes.error.error.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'This email is already used!'
				break;
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'This email was not found!'
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'This password is invalid!'
				break;
		}

		return throwError(errorMessage);
	};

}