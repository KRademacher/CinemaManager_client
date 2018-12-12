import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { DateTimeAdapter } from 'ng-pick-datetime';

import { Showing } from '../classes/showing';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-showing-add',
  templateUrl: './showing-add.component.html',
  styleUrls: ['./showing-add.component.css']
})
export class ShowingAddComponent implements OnInit {

  showingForm = new FormGroup({
    movieTitle: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required)
  });

	@Input() showing: Showing = new Showing();

  minDate = new Date(Date.now());

  constructor(
  	private router: Router,
  	private cinemaService: CinemaService, 
    private location: Location,
    private dateTimeAdapter: DateTimeAdapter<any>
  ) { 
    dateTimeAdapter.setLocale('nl-NL');
  }

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  createShowing() {
    this.cinemaService.createShowing(this.showing)
      .subscribe(() => {
        this.goBack();
      })
  }

  goBack() {
  	this.location.back();
  }
}