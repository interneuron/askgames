import { ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { TopicAnswer } from '../topic/topic-answer.entity';
import { TopicService } from '../topic/topic.service';

@Resolver('TopicAnswer')
export class TopicAnswerResolver {
  constructor(
      private accountService: AccountService,
      private topicService: TopicService,
  ) {
  }

  @ResolveProperty()
  author(topicAnswer: TopicAnswer) {
    return this.accountService.findById(topicAnswer.accountId);
  }

  @ResolveProperty()
  comments(topicAnswer: TopicAnswer) {
    return this.topicService.findCommentsByAnswerId(topicAnswer.id);
  }
}
