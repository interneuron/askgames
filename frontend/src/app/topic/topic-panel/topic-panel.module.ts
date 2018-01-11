import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameUrlModule } from '../../game/game-url/game-url.module';
import { TopicUrlModule } from '../topic-url/topic-url.module';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GameUrlModule,
    TopicUrlModule,
  ],
  declarations: [
    TopicPanelComponent,
  ],
  exports: [
    TopicPanelComponent,
  ],
})
export class TopicPanelModule {
}
