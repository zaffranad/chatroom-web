import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('scrollMe', {static: true})
  private messagesContainer: ElementRef;

  messages: Array<Message> = [];
  obs: Observable<Array<Message>>;

  constructor(
    private messageService: MessageService,
    private ref: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.obs = this.messageService.getMessages()
      .pipe(
        map(message => {
          this.messages.push(message);
          this.ref.detectChanges();
          this.scrollToLastMessage();
          return this.messages;
        })
      )
  }

  private scrollToLastMessage() {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }
}
