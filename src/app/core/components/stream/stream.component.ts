import { Component, OnInit } from '@angular/core';
import { MessageService } from "../../services/message.service";
import { Message } from "../../model/message";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  messages: Array<Message> = [];
  obs: Observable<Array<Message>>;

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit() {

    this.obs = this.messageService.getMessages()
      .pipe(
        map(message => {
          this.messages.push(message);
          return this.messages;
        })
      )
  }

  onClear() {
    this.messages = [];
  }
}
