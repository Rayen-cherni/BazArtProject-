import { TestBed } from '@angular/core/testing';

import { ChaussuresService } from './chaussures.service';

describe('ChaussuresService', () => {
  let service: ChaussuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaussuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
