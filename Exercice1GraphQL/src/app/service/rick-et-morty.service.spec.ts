import { TestBed } from '@angular/core/testing';

import { RickEtMortyService } from './rick-et-morty.service';

describe('RickEtMortyService', () => {
  let service: RickEtMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickEtMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
