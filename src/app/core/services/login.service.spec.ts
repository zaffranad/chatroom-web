import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should store in session when value is valid', () => {
    const service: LoginService = TestBed.get(LoginService);
    service.login = 'newLogin'
    const inSessionStorageValue = sessionStorage.getItem('login');
    expect(inSessionStorageValue).not.toBeNull();
  });

  it('should not store in session when value is not valid', () => {
    const service: LoginService = TestBed.get(LoginService);
    sessionStorage.setItem('login', 'oldLogin');

    service.login = '';
    expect(sessionStorage.getItem('login')).toBe('oldLogin');

    service.login = null;
    expect(sessionStorage.getItem('login')).toBe('oldLogin');

    service.login = undefined;
    expect(sessionStorage.getItem('login')).toBe('oldLogin');
  });

  it('isValid should return true if the login is set and valid', () => {
    const service: LoginService = TestBed.get(LoginService);
    sessionStorage.setItem('login', 'validLogin');
    expect(service.isValid).toBeTruthy();
  });

  it('isValid should return false if the login is not set or not valid', () => {
    const service: LoginService = TestBed.get(LoginService);

    sessionStorage.setItem('login', '');
    expect(service.isValid()).toBeFalsy();

    sessionStorage.removeItem('login');
    expect(service.isValid()).toBeFalsy();
  });
});
