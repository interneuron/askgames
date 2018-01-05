import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { gameProviders } from './game.providers';
import { GameService } from './game.service';

@Module({
  imports: [
    DbModule,
  ],
  components: [
    ...gameProviders,
    GameService,
  ],
  exports: [
    GameService,
  ],
})
export class GameModule {
}
