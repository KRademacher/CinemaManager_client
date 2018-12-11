import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
