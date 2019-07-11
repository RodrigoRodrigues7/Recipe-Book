import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { API_CONFIG } from 'src/app/api.config';

interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {

	constructor(private http: HttpClient) { }

	signUp(email: string, password: string) {
		return this.http.post<AuthResponseData>(
			API_CONFIG.firebaseSignUpUrl,
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		).pipe(catchError(errorRes => {
			let errorMessage = 'An unknown erro occured!'
			if (!errorRes.error || !errorRes.error.error) {
				return throwError(errorMessage);
			}

			switch (errorRes.error.error.message) {
				case 'EMAIL_EXISTS':
					errorMessage = 'This email is already used!'
			}
			
			return throwError(errorMessage);
		}));
	}

}