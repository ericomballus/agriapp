import { TestBed } from '@angular/core/testing';

import { DisplaymodalService } from './displaymodal.service';

describe('DisplaymodalService', () => {
  let service: DisplaymodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaymodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
