import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../core/services/login.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
  login: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  onSubmit() {
    this.loginService.login = this.login;
    this.router.navigate(['chat'])
  }
}
