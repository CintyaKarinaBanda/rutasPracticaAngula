import { TestBed } from '@angular/core/testing';

import { LibrosApiService } from './libros-api.service';

describe('LibrosApiService', () => {
  let service: LibrosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
