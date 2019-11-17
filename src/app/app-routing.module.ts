import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from "./modules/chat/chat.component";
import { WelcomeScreenComponent } from "./modules/welcome-screen/welcome-screen.component";
import { IsLoginSuppliedGuard } from "./modules/chat/guard/is-login-supplied.guard";


const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [
      IsLoginSuppliedGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
