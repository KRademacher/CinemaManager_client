import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Room } from '../classes/room';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

	@Input() room: Room = new Room();

  roomForm = new FormGroup({
    number: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required)
  });

	roomTypes = ['Standard', '3D', 'IMAX', 'IMAX 3D'];

  constructor(
  	private router: Router,
  	private cinemaService: CinemaService, 
    private location: Location
	) { }

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  createRoom() {
  	this.cinemaService.createRoom(this.room)
  		.subscribe(() => {
  			this.goBack();
  		});
  }

  goBack() {
  	this.location.back();
  }

}
