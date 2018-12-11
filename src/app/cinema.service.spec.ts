import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CinemaService } from './cinema.service';

describe('CinemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });beforeEach(() => TestBed.configureTestingModule({

  }));

  it('should be created', () => {
    const service: CinemaService = TestBed.get(CinemaService);
    expect(service).toBeTruthy();
  });
});
