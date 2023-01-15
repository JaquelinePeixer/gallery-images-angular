import { TestBed } from '@angular/core/testing';

import { ApiUnsplashService } from './api-unsplash.service';

describe('ApiUnsplashService', () => {
  let service: ApiUnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
