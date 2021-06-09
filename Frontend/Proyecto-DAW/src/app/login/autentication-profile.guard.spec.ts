import { TestBed } from '@angular/core/testing';

import { AutenticationProfileGuard } from './autentication-profile.guard';

describe('AutenticationProfileGuard', () => {
  let guard: AutenticationProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticationProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
