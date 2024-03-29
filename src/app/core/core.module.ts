import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StreamComponent} from "./components/stream/stream.component";
import {InputAreaComponent} from "./components/input-area/input-area.component";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    StreamComponent,
    InputAreaComponent
  ],
  exports: [
    StreamComponent,
    InputAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
