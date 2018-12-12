import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  private roomForm = new FormGroup({
    number: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required)
  });

	private roomTypes = ['Standard', '3D', 'IMAX', 'IMAX 3D'];

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
  	const id = this.route.snapshot.paramMap.get('roomId');
    const name = this.route.snapshot.paramMap.get('name');
  	this.cinemaService.getRoom(id, name)
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
    const name = this.route.snapshot.paramMap.get('name');
    this.router.navigate([`/cinemas/${name}/${this.room._id}/addShowing`], { relativeTo: this.route });
  }

  editShowing(id: string) {
    const name = this.route.snapshot.paramMap.get('name');
    this.router.navigate([`/cinemas/${name}/${this.room._id}/${id}`], { relativeTo: this.route });
  }

  goBack() {
    this.location.back();
  }
}