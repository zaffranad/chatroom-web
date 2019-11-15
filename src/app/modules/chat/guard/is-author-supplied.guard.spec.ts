import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthorSuppliedGuard } from './is-author-supplied.guard';

describe('IsAuthorSuppliedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthorSuppliedGuard]
    });
  });

  it('should ...', inject([IsAuthorSuppliedGuard], (guard: IsAuthorSuppliedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
