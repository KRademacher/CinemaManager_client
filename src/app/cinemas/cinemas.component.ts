import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Cinema } from '../classes/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

	cinemas: Cinema[];

  constructor(
    private cinemaService: CinemaService, 
    private router: Router
  ) { }

  ngOnInit() { //Redirect to login if no token is found.
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getCinemas();
    }
  }

  getCinemas(): void {
  	this.cinemaService.getCinemas()
  		.subscribe(cinemas => {
        //Sort alphabetically
        cinemas.sort(function(a, b) {
          var nameA = a.name.toLowerCase();
          var nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.cinemas = cinemas;
      });
  }

  createCinema() { //Navigate to cinema-add component.
    this.router.navigate(['cinemas/create']);
  }

  editCinema(name: string) { //Navigate to cinema-detail component.
    this.router.navigate([`cinemas/${name}`]);
  }
}