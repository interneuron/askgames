import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { DbModule } from '../db/db.module';
import { GameModule } from '../game/game.module';
import { PaginatorService } from '../helpers/paginator.service';
import { TopicModule } from '../topic/topic.module';
import { AccountResolver } from './account.resolver';
import { GameResolver } from './game.resolver';
import { TopicAnswerResolver } from './topic-answer.resolver';
import { TopicCommentResolver } from './topic-comment.resolver';
import { TopicResolver } from './topic.resolver';

@Module({
  imports: [
    DbModule,
    TopicModule,
    GameModule,
    AccountModule,
  ],
  components: [
    AccountResolver,
    GameResolver,
    TopicResolver,
    TopicAnswerResolver,
    TopicCommentResolver,
    PaginatorService,
  ],
  exports: [],
})
export class ApiModule {
}
