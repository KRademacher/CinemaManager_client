import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Room } from '../classes/room';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['./showing-list.component.css']
})
export class ShowingListComponent implements OnInit {

	rooms: Room[];

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
    private location: Location,
  	private cinemaService: CinemaService
	) { }

	title = this.route.snapshot.paramMap.get('title');
  cinemaName = this.route.snapshot.paramMap.get('name');

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getShowingsByName();
    }
  }

  getShowingsByName() {
  	this.cinemaService.getShowingsByName(this.title, this.cinemaName)
  		.subscribe((rooms) => {
  			this.rooms = rooms;
  		})
  }

  goBack() {
    this.location.back();
  }
}
