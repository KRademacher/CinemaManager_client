import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './classes/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private url = 'https://cinemamanagerserver.herokuapp.com/api';
  //private url = 'http://localhost:3000/api';

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
  	return this.http.post<any>(`${this.url}/login`, user, this.httpOptions)
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
  	return this.http.post<any>(`${this.url}/register`, user, this.httpOptions)
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
}