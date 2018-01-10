import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { GameService } from '../game/game.service';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Resolver('Topic')
export class TopicResolver {
  constructor(
      private topicService: TopicService,
      private gameService: GameService,
      private accountService: AccountService,
  ) {
  }

  @Query()
  topic(obj, args, context, info) {
    return this.topicService.findById(args.id);
  }

  @Query()
  latestTopics(obj, args) {
    return this.topicService.findLatest();
  }

  @ResolveProperty()
  game(topic: Topic) {
    return this.gameService.findById(topic.gameId);
  }

  @ResolveProperty()
  answers(topic: Topic) {
    return this.topicService.findAnswers(topic.id);
  }

  @ResolveProperty()
  author(topic: Topic) {
    return this.accountService.findById(topic.accountId);
  }

  @ResolveProperty()
  comments(topic: Topic) {
    return this.topicService.findCommentsByTopicId(topic.id);
  }
}
