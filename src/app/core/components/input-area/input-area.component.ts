import { Component, OnInit } from '@angular/core';
import { MessageService } from "../../services/message.service";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {
  message: string;
  login: string;

  constructor(
    private messageService: MessageService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.login = this.loginService.login;
  }

  onSubmit() {
    this.messageService.postMessage(this.message, this.login)
      .subscribe(ok => {
          this.message = null;
        },
        error => {
          alert('error');
          console.error(error);
        });
  }
}
