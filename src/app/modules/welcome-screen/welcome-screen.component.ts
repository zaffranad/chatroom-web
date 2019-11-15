import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthorService } from "../../core/services/author.service";

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
  author: string;

  constructor(
    private router: Router,
    private authorService: AuthorService
  ) { }

  onSubmit() {
    this.authorService.author = this.author;
    this.router.navigate(['chat'])
  }
}
