import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-showing-all',
  templateUrl: './showing-all.component.html',
  styleUrls: ['./showing-all.component.css']
})
export class ShowingAllComponent implements OnInit {

	showings: object[];

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private location: Location,
  	private cinemaService: CinemaService
  ) { }

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
  		this.router.navigate(['/login']);
  	} else {
  		this.getShowings();
  	}
  }

  getShowings() {
  	console.log('getShowings component');	
  	this.cinemaService.getShowings()
  		.subscribe((result) => this.showings = result);
  }

  goBack() {
  	this.location.back();
  }
}