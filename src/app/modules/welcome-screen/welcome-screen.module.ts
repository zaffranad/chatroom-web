import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './welcome-screen.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [WelcomeScreenComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WelcomeScreenModule { }
