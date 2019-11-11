import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Message } from "../model/message";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  getMessages(): Observable<Message> {
    return new Observable(observer => {
      const eventSource = new EventSource('http://localhost:8080/messages/');

      eventSource.onmessage = event => {
        observer.next(MessageService.bodyToMessage(event.data))
      }
    })
  }

  private static bodyToMessage(body: any): Message {
    return new Message(
      body.content,
      body.author,
      body.postedDate
    )
  }
}
