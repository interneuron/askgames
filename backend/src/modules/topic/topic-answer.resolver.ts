import { ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { GameService } from '../game/game.service';
import { TopicAnswer } from './topic-answer.entity';
import { TopicService } from './topic.service';

@Resolver('TopicAnswer')
export class TopicAnswerResolver {
  constructor(
      private topicService: TopicService,
      private gameService: GameService,
      private accountService: AccountService,
  ) {
  }

  @ResolveProperty()
  author(topicAnswer: TopicAnswer) {
    return this.accountService.findById(topicAnswer.accountId);
  }
}
