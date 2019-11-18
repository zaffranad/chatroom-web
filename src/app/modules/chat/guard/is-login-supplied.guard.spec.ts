import { inject, TestBed } from '@angular/core/testing';

import { IsLoginSuppliedGuard } from './is-login-supplied.guard';
import { RouterTestingModule } from "@angular/router/testing";

describe('IsLoginSuppliedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoginSuppliedGuard],
      imports: [RouterTestingModule.withRoutes([])]
    });
  });

  it('should ...', inject([IsLoginSuppliedGuard], (guard: IsLoginSuppliedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
