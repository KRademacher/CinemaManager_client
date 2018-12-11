import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { CinemaDetailComponent } from './cinema-detail.component';
import { LoginComponent } from '../login/login.component';

describe('CinemaDetailComponent', () => {
  let component: CinemaDetailComponent;
  let fixture: ComponentFixture<CinemaDetailComponent>;

  let routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
  ];

  beforeAll(() => {
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CinemaDetailComponent,
        LoginComponent 
      ],
      imports: [ 
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
