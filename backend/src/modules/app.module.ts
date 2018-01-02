import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GameModule } from './game/game.module';
import { TopicModule } from './topic/topic.module';

@Module({
  modules: [
    GameModule,
    TopicModule,
  ],
  controllers: [
    AppController,
  ],
  components: [],
})
export class ApplicationModule {
}
