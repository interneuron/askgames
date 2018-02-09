import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameUrlModule } from '../game/game-url/game-url.module';
import { TopicPanelModule } from '../topic/topic-panel/topic-panel.module';
import { TopicUrlModule } from '../topic/topic-url/topic-url.module';
import { UiSideNavModule } from '../ui/ui-side-nav/ui-side-nav.module';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserPageTopicsComponent } from './user-page-topics/user-page-topics.component';
import { UserPageAnswersComponent } from './user-page-answers/user-page-answers.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GameUrlModule,
    TopicUrlModule,
    TopicPanelModule,
    UiSideNavModule,
  ],
  declarations: [
    HomeComponent,
    UserPageComponent,
    UserPageTopicsComponent,
    UserPageAnswersComponent,
  ],
})
export class HomeModule {
}
