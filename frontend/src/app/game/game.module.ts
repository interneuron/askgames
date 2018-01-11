import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopicPanelModule } from '../topic/topic-panel/topic-panel.module';
import { UiSideNavModule } from '../ui/ui-side-nav/ui-side-nav.module';
import { GamePageComponent } from './game-page/game-page.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    UiSideNavModule,
    TopicPanelModule,
  ],
  declarations: [
    GamePageComponent,
  ],
})
export class GameModule {
}
