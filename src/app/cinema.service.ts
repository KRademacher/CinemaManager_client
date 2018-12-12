import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Room } from './classes/room';
import { Cinema } from './classes/cinema';
import { Showing } from './classes/showing';

@Injectable({ providedIn: 'root' })
export class CinemaService {

  private url = 'https://cinemamanagerserver.herokuapp.com/api';

  private cinemaId: string;
  private roomId: string;

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  setCinemaId(id: string) {
    this.cinemaId = id;
  }

  getCinemaId() {
    return this.cinemaId;
  }

  setRoomId(id: string) {
    this.roomId = id;
  }

  getRoomId() {
    return this.roomId;
  }

  getCinemas(): Observable<Cinema[]> {
  	return this.http.get<Cinema[]>(`${this.url}/cinema`, this.httpOptions)
  		.pipe(retry(5), catchError(this.handleError<any>('getCinemas')));
  }

  getCinema(id: string) {
  	return this.http.get(`${this.url}/cinema/${id}`, this.httpOptions)
  		.pipe(catchError(this.handleError<any>('getCinema')));
  }

  createCinema(cinema: Cinema): Observable<Cinema> {
  	return this.http.post<Cinema>(`${this.url}/cinema`, cinema, this.httpOptions)
  		.pipe(catchError(this.handleError<any>('createCinema')));
  }

  updateCinema(cinema: Cinema): Observable<Cinema> {
  	return this.http.put<Cinema>(`${this.url}/cinema/${cinema._id}`, cinema, this.httpOptions)
  		.pipe(catchError(this.handleError<any>('updateCinema')));
  }

  deleteCinema(cinema: Cinema) {
  	return this.http.delete(`${this.url}/cinema/${cinema._id}`, this.httpOptions)
  		.pipe(catchError(this.handleError<any>('deleteCinema')));
  }

  getRoom(id: string) {
    return this.http.get(`${this.url}/room/${this.getCinemaId()}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('getRoom')));
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.url}/room`, {
      'cinemaId': this.getCinemaId(),
      'number': room.number,
      'type': room.type,
      'capacity': room.capacity
    }, this.httpOptions)
      .pipe(catchError(this.handleError<any>('createRoom')));
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.url}/room/${room._id}`, {
      'cinemaId': this.getCinemaId(),
      'number': room.number,
      'type': room.type,
      'capacity': room.capacity
    }, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateRoom')));
  }

  deleteRoom(room: Room): Observable<any> {
    return this.http.request('delete', `${this.url}/room/${room._id}`, {
      body: {
        'cinemaId': this.getCinemaId()
      },
      headers: this.httpOptions.headers
    }).pipe(catchError(this.handleError<any>('deleteRoom')));
  }

  getShowing(id: string) {
    return this.http.get(`${this.url}/showing/${this.getCinemaId()}/${this.getRoomId()}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('getShowing')));
  }

  getShowings() {
    return this.http.get(`${this.url}/showing/${this.getCinemaId()}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('getShowings')));
  }

  getShowingsByName(name: string) {
    return this.http.get(`${this.url}/showing/${this.getCinemaId()}/${name}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('getShowingsByName')));
  }

  createShowing(showing: Showing): Observable<Showing> {
    return this.http.post<Showing>(`${this.url}/showing`, {
      'cinemaId': this.getCinemaId(),
      'roomId': this.getRoomId(),
      'movieTitle': showing.movieTitle,
      'startDate': showing.startDate,
      'duration': showing.duration
    }, this.httpOptions)
      .pipe(catchError(this.handleError<any>('createShowing')));
  }

  updateShowing(showing: Showing): Observable<Showing> {
    return this.http.put<Showing>(`${this.url}/showing/${showing._id}`, {
      'cinemaId': this.getCinemaId(),
      'roomId': this.getRoomId(),
      'movieTitle': showing.movieTitle,
      'startDate': showing.startDate,
      'duration': showing.duration
    }, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateShowing')));
  }

  deleteShowing(showing: Showing): Observable<any> {
    return this.http.request('delete', `${this.url}/showing/${showing._id}`, {
      body: {
        'cinemaId': this.getCinemaId(),
        'roomId': this.getRoomId()
      },
      headers: this.httpOptions.headers
    }).pipe(catchError(this.handleError<any>('deleteShowing')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.error(error);

  		//Lets the app keep running by returning an empty result.
  		return of(result as T);
  	};
  }
}