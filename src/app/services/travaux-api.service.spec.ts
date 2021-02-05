import { TestBed } from '@angular/core/testing';

import { TravauxApiService } from './travaux-api.service';

describe('TravauxApiService', () => {
  let service: TravauxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravauxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
