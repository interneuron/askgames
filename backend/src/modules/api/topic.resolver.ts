import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { GameService } from '../game/game.service';
import { Topic } from '../topic/topic.entity';
import { TopicService } from '../topic/topic.service';

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
    const params: any = {};
    if (args.gameId) {
      params.gameId = args.gameId;
    }
    return this.topicService.findLatest(20, params);
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