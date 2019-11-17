import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { CoreModule } from "../../core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ChatModule {
}
