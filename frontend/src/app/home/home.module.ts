import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameUrlModule } from '../game/game-url/game-url.module';
import { TopicUrlModule } from '../topic/topic-url/topic-url.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GameUrlModule,
    TopicUrlModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
