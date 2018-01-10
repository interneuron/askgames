import { ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { TopicAnswer } from './topic-answer.entity';

@Resolver('TopicComment')
export class TopicCommentResolver {
  constructor(
      private accountService: AccountService,
  ) {
  }

  @ResolveProperty()
  author(topicAnswer: TopicAnswer) {
    return this.accountService.findById(topicAnswer.accountId);
  }
}
