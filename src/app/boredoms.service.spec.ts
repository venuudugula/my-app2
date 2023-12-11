import { TestBed } from '@angular/core/testing';

import { BoredomsService } from './boredoms.service';

describe('BoredomsService', () => {
  let service: BoredomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
