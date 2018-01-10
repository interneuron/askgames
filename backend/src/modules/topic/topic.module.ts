import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { DbModule } from '../db/db.module';
import { GameModule } from '../game/game.module';
import { TopicAnswerResolver } from './topic-answer.resolver';
import { TopicCommentResolver } from './topic-comment.resolver';
import { topicProviders } from './topic.providers';
import { TopicResolver } from './topic.resolver';
import { TopicService } from './topic.service';

@Module({
  imports: [
    DbModule,
    AccountModule,
    GameModule,
  ],
  controllers: [],
  components: [
    ...topicProviders,
    TopicService,
    TopicResolver,
    TopicAnswerResolver,
    TopicCommentResolver,
  ],
})
export class TopicModule {
}
