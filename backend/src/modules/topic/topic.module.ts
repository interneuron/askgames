import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { topicProviders } from './topic.providers';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';

@Module({
  modules: [
    DbModule,
  ],
  controllers: [
    TopicController,
  ],
  components: [
    ...topicProviders,
    TopicService,
  ],
})
export class TopicModule {
}
