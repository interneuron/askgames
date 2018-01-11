import { Query, Resolver } from '@nestjs/graphql';
import { GameService } from '../game/game.service';
import { TopicService } from '../topic/topic.service';

@Resolver('Game')
export class GameResolver {
  constructor(
      private gameService: GameService,
  ) {
  }

  @Query()
  game(obj, args) {
    return this.gameService.findById(args.id);
  }
}
