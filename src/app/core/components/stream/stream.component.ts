import { Component, OnInit } from '@angular/core';
import { MessageService } from "../../services/message.service";
import { Message } from "../../model/message";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  messages: Array<Message> = [];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.getMessages()
      .pipe(
        map(message => {
          console.log(this.messages, message)
          return this.messages.push(message)
        })
      ).subscribe();
  }

}
