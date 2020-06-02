import { TestBed } from '@angular/core/testing';

import { MeilleuresVentesService } from './meilleures-ventes.service';

describe('MeilleuresVentesService', () => {
  let service: MeilleuresVentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeilleuresVentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
