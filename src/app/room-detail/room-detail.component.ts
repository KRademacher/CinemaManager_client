import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Room } from '../classes/room';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

	@Input() room: Room;

	@Input() roomTypes = ['Standard', '3D', 'IMAX', 'IMAX 3D'];

  constructor(
  	private cinemaService: CinemaService, 
  	private router: Router,
  	private route: ActivatedRoute,
    private location: Location
	) { }

  ngOnInit() {
  	if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.getRoom();
    }
  }

  getRoom() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.cinemaService.getRoom(id)
  		.subscribe((room) => {
        this.room = room;
        this.cinemaService.setRoomId(room._id);
      });
  }

  updateRoom() {
    this.cinemaService.updateRoom(this.room)
      .subscribe(() => {
        this.goBack();
      });
  }

  deleteRoom() {
    this.cinemaService.deleteRoom(this.room)
      .subscribe(() =>{
        this.goBack()
      });
  }

  addShowing() {
    this.router.navigate(['/showings/create']);
  }

  editShowing(id: string) {
    this.router.navigate(['/showing/' + id]);
  }

  goBack() {
    this.location.back();
  }
}