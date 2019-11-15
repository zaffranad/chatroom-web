import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from "./modules/chat/chat.module";
import { WelcomeScreenComponent } from "./modules/welcome-screen/welcome-screen.component";
import { WelcomeScreenModule } from "./modules/welcome-screen/welcome-screen.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    WelcomeScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
