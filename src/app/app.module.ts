import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { CinemaAddComponent } from './cinema-add/cinema-add.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { ShowingAddComponent } from './showing-add/showing-add.component';
import { ShowingDetailComponent } from './showing-detail/showing-detail.component';
import { ShowingListComponent } from './showing-list/showing-list.component';
import { ShowingAllComponent } from './showing-all/showing-all.component';


@NgModule({
  declarations: [
    AppComponent,
    CinemasComponent,
    RegisterComponent,
    LoginComponent,
    CinemaDetailComponent,
    CinemaAddComponent,
    RoomDetailComponent,
    RoomAddComponent,
    ShowingAddComponent,
    ShowingDetailComponent,
    ShowingListComponent,
    ShowingAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }