import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Cinema } from '../classes/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-add',
  templateUrl: './cinema-add.component.html',
  styleUrls: ['./cinema-add.component.css']
})
export class CinemaAddComponent implements OnInit {

  constructor(
  	private router: Router,
  	private cinemaService: CinemaService, 
    private location: Location
	) { }

  ngOnInit() { //Redirect to login if no token is found.
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  createCinema(name: string): void { //Create a new cinema
    name = name.trim();
  	if (!name) {
  		return;
  	}
  	this.cinemaService.createCinema({ name } as Cinema)
  		.subscribe(cinema => {
        this.location.back();
  		});
  }

  goBack() {
    this.location.back();
  }
}