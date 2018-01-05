import { NgModule } from '@angular/core';
import { GameUrlPipe } from './game-url.pipe';

@NgModule({
  declarations: [GameUrlPipe],
  exports: [GameUrlPipe],
})
export class GameUrlModule {
}
