import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { gameProviders } from './game.providers';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  modules: [
    DbModule,
  ],
  controllers: [
    GamesController,
  ],
  components: [
    ...gameProviders,
    GamesService,
  ],
})
export class GamesModule {
}
