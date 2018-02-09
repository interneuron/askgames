import { ResolveProperty, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';
import { Answer } from '../topic/answer.entity';

@Resolver('Comment')
export class CommentResolver {
  constructor(
      private accountService: AccountService,
  ) {
  }

  @ResolveProperty()
  author(answer: Answer) {
    return this.accountService.findById(answer.accountId);
  }
}
