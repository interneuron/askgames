import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { GameService } from '../game/game.service';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Resolver('Topic')
export class TopicResolver {
  constructor(
      private topicService: TopicService,
      private gameService: GameService,
  ) {
  }

  @Query()
  topic(obj, args, context, info) {
    return this.topicService.findById(args.id);
  }

  @ResolveProperty()
  game(topic: Topic) {
    return this.gameService.findById(topic.gameId);
  }

  @Query()
  latestTopics(obj, args) {
    return this.topicService.findLatest();
  }
}
