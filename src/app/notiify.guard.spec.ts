import { TestBed } from '@angular/core/testing';

import { NotiifyGuard } from './notiify.guard';

describe('NotiifyGuard', () => {
  let guard: NotiifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotiifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
