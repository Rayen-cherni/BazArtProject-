import { TestBed } from '@angular/core/testing';

import { RaterpasService } from './raterpas.service';

describe('RaterpasService', () => {
  let service: RaterpasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaterpasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
