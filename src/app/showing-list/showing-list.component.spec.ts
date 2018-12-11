import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShowingListComponent } from './showing-list.component';

describe('ShowingListComponent', () => {
  let component: ShowingListComponent;
  let fixture: ComponentFixture<ShowingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowingListComponent
      ], imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
