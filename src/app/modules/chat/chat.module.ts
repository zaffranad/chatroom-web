import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import {CoreModule} from "../../core/core.module";



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ChatModule { }
