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

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getShowings();
    }
  }

  getShowings() {
  	const title = this.title;
  	this.cinemaService.getShowingsByName(title)
  		.subscribe((rooms) => {
  			this.rooms = rooms;
  		})
  }

  goBack() {
    this.location.back();
  }
}
