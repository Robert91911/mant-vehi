import { TestBed } from '@angular/core/testing';

import { CheckLoguedGuard } from './check-logued.guard';

describe('CheckLoguedGuard', () => {
  let guard: CheckLoguedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLoguedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
