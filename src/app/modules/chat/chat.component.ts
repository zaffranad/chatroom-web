import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../core/services/login.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  login: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.login = this.loginService.login;
  }

  onClick() {
    this.loginService.reset();
    console.log(this.loginService.login)
  }
}
