import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './classes/user';

@Injectable({ providedIn: 'root' })
export class UserService {

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
  	return this.http.post<any>('http://localhost:3000/api/login', user, this.httpOptions)
  		//.pipe(catchError(this.handleError<any>('login')));
  		.pipe(
  			tap((response) => {
  				if (response.status == 200) {
  					return response;
  				}
  			}), catchError((error) => {
  				return throwError(error);
  			})
			);
  }

  register(user: User): Observable<any> {
  	return this.http.post<any>('http://localhost:3000/api/register', user, this.httpOptions)
  		.pipe(
  			tap((response) => {
  				if (response.status == 200) {
  					return response;
  				}
  			}), catchError((error) => {
  				return throwError(error);
  			})
			);
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  // 	return (error: any): Observable<T> => {
  // 		if (error.name === 'HttpErrorResponse') {
  // 			console.error(error.error.Message);
  // 			return error.error.Message;
  // 		} else {
  // 			console.error(error);
  // 		}

  // 		//Lets the app keep running by returning an empty result.
  // 		return of(result as T);
  // 	};
  // }
}