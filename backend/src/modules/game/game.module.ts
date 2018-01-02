import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { gameProviders } from './game.providers';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  modules: [
    DbModule,
  ],
  controllers: [
    GameController,
  ],
  components: [
    ...gameProviders,
    GameService,
  ],
})
export class GameModule {
}
