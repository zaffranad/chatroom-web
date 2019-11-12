import { Component, OnInit } from '@angular/core';
import { MessageService } from "../../services/message.service";

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {
  message: string;
  author: string;

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.messageService.postMessage(this.message, this.author)
      .subscribe(ok => {
          console.log('well send...')
        },
        error => {
          alert('error');
          console.error(error);
        });
  }
}
