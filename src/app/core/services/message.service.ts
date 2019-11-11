import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Message } from "../model/message";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMessages(): Observable<Message> {
    return new Observable(observer => {
      const eventSource = new EventSource('http://localhost:8080/messages/realtime');

      eventSource.onmessage = event => {
        observer.next(MessageService.bodyToMessage(event.data))
      };

      eventSource.onerror = event => {
        console.error(event);
      }
    })
  }

  private static bodyToMessage(body: string): Message {
    const parsed: Message = JSON.parse(body);
    return new Message(
      parsed.content,
      parsed.author,
      parsed.postedDate
    )
  }

  postMessage(message: string) {
    return this.http.post('http://localhost:8080/messages/message', new Message(message, 'adrien', 'null'));
  }
}
