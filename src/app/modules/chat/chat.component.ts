import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../../core/services/author.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  author: string;

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.author = this.authorService.author;
  }

}
