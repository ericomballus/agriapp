import { TestBed } from '@angular/core/testing';

import { ProjetApiService } from './projet-api.service';

describe('ProjetApiService', () => {
  let service: ProjetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
