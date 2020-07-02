import { TestBed } from '@angular/core/testing';

import { AccessoiresService } from './accessoires.service';

describe('AccessoiresService', () => {
  let service: AccessoiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
