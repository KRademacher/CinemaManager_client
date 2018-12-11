import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShowingDetailComponent } from './showing-detail.component';
import { LoginComponent } from '../login/login.component';

describe('ShowingDetailComponent', () => {
  let component: ShowingDetailComponent;
  let fixture: ComponentFixture<ShowingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowingDetailComponent,
        LoginComponent
      ],
      imports:[
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent}
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
