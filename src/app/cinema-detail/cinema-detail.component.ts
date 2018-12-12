import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Cinema } from '../classes/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.component.html',
  styleUrls: ['./cinema-detail.component.css']
})
export class CinemaDetailComponent implements OnInit {

  cinemaForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

	@Input() cinema: Cinema;

  constructor(
  	private cinemaService: CinemaService, 
  	private router: Router,
  	private route: ActivatedRoute,
    private location: Location
	) { }

  ngOnInit() { //Redirect to login if no token is found.
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getCinema();
    }
  }

  getCinema() { //Get requested Cinema.
  	const name = this.route.snapshot.paramMap.get('name');
		this.cinemaService.getCinema(name)
			.subscribe(cinema => {
        this.cinema = cinema;
        this.cinemaService.setCinemaId(cinema._id);
      });
  }

  updateCinema() { //Update Cinema with new values.
    this.cinemaService.updateCinema(this.cinema)
      .subscribe(() => {
        this.goBack();
      });
  }

  deleteCinema() { //Delete Cinema.
    this.cinemaService.deleteCinema(this.cinema)
      .subscribe(() => {
        this.goBack();
      });
  }

  addRoom() { //Navigate to room-add component.
    this.router.navigate([`/cinemas/${this.cinema.name}/createRoom`]);
  }

  editRoom(id: string) { //Navigate to room-detail component
    this.router.navigate([`/cinemas/${this.cinema.name}/${id}`]);
  }

  showMovieList(title: string) { //Navigate to showing-list component.
    this.router.navigate([`/cinemas/${this.cinema.name}/showings/${title}`]);
  }

  showAllShowings() { //Navigate to showing-all component
    this.router.navigate([`/cinemas/${this.cinema.name}/showings`]);
  }

  goBack() {
    this.location.back();
  }
}