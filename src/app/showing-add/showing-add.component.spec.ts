import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShowingAddComponent } from './showing-add.component';
import { LoginComponent } from '../login/login.component';

describe('ShowingAddComponent', () => {
  let component: ShowingAddComponent;
  let fixture: ComponentFixture<ShowingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShowingAddComponent, 
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
    fixture = TestBed.createComponent(ShowingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
