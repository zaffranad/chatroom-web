import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StreamComponent} from "./components/stream/stream.component";
import {InputAreaComponent} from "./components/input-area/input-area.component";



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
