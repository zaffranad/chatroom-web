import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginKeyName = 'login';

  constructor() {
  }

  get login(): string {
    return sessionStorage.getItem(this._loginKeyName);
  }

  set login(login: string) {
    !!login && sessionStorage.setItem(this._loginKeyName, login);
  }

  isValid(): boolean {
    return !!this.login;
  }

  reset() {
    sessionStorage.removeItem(this._loginKeyName);
  }
}
