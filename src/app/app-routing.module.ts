import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaAddComponent } from './cinema-add/cinema-add.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ShowingAddComponent } from './showing-add/showing-add.component';
import { ShowingDetailComponent } from './showing-detail/showing-detail.component';
import { ShowingListComponent } from './showing-list/showing-list.component';
import { ShowingAllComponent } from './showing-all/showing-all.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'cinemas', 
		children: [
			{ path: '', component: CinemasComponent },
			{ path: 'create', component: CinemaAddComponent },
			{ path: ':name', 
					children: [
						{ path: '', component: CinemaDetailComponent },
						{ path: 'createRoom', component: RoomAddComponent },
						{ path: 'showings', 
							children: [
								{ path: '', component: ShowingAllComponent },
								{ path: ':title', component: ShowingListComponent }
							]},
						{ path: ':roomId', 
							children: [
								{ path: '', component: RoomDetailComponent },
								{ path: 'addShowing', component: ShowingAddComponent },
								{ path: ':showingId', component: ShowingDetailComponent }
							]},
					]},
		]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
