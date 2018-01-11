import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { topicProviders } from './topic.providers';
import { TopicService } from './topic.service';

@Module({
  imports: [
    DbModule,
  ],
  controllers: [],
  components: [
    ...topicProviders,
    TopicService,
  ],
  exports: [
    TopicService,
  ],
})
export class TopicModule {
}
