import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StreamComponent} from "./stream/stream.component";
import {InputAreaComponent} from "./input-area/input-area.component";



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
    CommonModule
  ]
})
export class CoreModule { }
