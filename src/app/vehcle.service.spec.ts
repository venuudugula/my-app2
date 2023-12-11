import { TestBed } from '@angular/core/testing';

import { VehcleService } from './vehcle.service';

describe('VehcleService', () => {
  let service: VehcleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehcleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
