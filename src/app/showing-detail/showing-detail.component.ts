import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { DateTimeAdapter } from 'ng-pick-datetime';

import { Showing } from '../classes/showing';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-showing-detail',
  templateUrl: './showing-detail.component.html',
  styleUrls: ['./showing-detail.component.css']
})
export class ShowingDetailComponent implements OnInit {

	@Input() showing: Showing;

	private minDate = new Date(Date.now());

  constructor(
  	private cinemaService: CinemaService, 
  	private router: Router,
  	private route: ActivatedRoute,
    private location: Location,
    private dateTimeAdapter: DateTimeAdapter<any>
  ) { 
  	dateTimeAdapter.setLocale('nl-NL');
  }

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getShowing();
    }
  }

  getShowing() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.cinemaService.getShowing(id)
  		.subscribe((showing) => {
  			this.showing = showing;
  		})
  }

  updateShowing() {
  	this.cinemaService.updateShowing(this.showing)
  		.subscribe(() => this.goBack());
  }

  deleteShowing() {
  	this.cinemaService.deleteShowing(this.showing)
  		.subscribe(() => this.goBack());
  }

  goBack() {
  	this.location.back();
  }
}