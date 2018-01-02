import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GamesModule } from './games/games.module';

@Module({
  modules: [
    GamesModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule {
}
