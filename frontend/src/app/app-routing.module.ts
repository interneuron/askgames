import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'q',
    loadChildren: './topic/topic.module#TopicModule',
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
