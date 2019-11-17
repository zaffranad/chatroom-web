import { inject, TestBed } from '@angular/core/testing';

import { IsLoginSuppliedGuard } from './is-login-supplied.guard';

describe('IsLoginSuppliedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoginSuppliedGuard]
    });
  });

  it('should ...', inject([IsLoginSuppliedGuard], (guard: IsLoginSuppliedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
