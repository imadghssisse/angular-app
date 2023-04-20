import { TestBed } from '@angular/core/testing';

import { RepositorieService } from './repositorie.service';

describe('RepositorieService', () => {
  let service: RepositorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
