import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { PaginatorService } from '../helpers/paginator.service';
import { Answer } from '../topic/answer.entity';
import { TopicService } from '../topic/topic.service';

@Resolver('Answer')
export class AnswerResolver {
  constructor(
      private accountService: AccountService,
      private topicService: TopicService,
      private paginator: PaginatorService,
  ) {
  }

  @Query()
  async answers(obj, args) {
    return this.paginator.wrap(await this.topicService.findAnswers(args));
  }

  @ResolveProperty()
  author(answer: Answer) {
    return this.accountService.findById(answer.accountId);
  }

  @ResolveProperty()
  comments(answer: Answer) {
    return this.topicService.findCommentsByAnswerId(answer.id);
  }

  @ResolveProperty()
  topic(answer: Answer) {
    return this.topicService.findById(answer.topicId);
  }
}
