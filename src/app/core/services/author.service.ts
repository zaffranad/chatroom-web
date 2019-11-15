import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private _authorKeyName = 'author';

  constructor() {
  }

  get author(): string {
    return sessionStorage.getItem(this._authorKeyName);
  }

  set author(author: string) {
    sessionStorage.setItem(this._authorKeyName, author);
  }
}
