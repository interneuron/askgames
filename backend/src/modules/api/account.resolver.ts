import { Mutation, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { Account } from '../account/account.entity';
import { AccountService } from '../account/account.service';
import { TopicService } from '../topic/topic.service';

@Resolver('Account')
export class AccountResolver {
  constructor(
      private accountService: AccountService,
      private topicService: TopicService,
  ) {
  }

  @Mutation()
  async createSession(_, {email, password}) {
    return await this.accountService.createSession(email, password);
  }

  @Query()
  async authAccount(obj, args, context, info) {
    const accountId = await this.accountService.isAuth(obj.headers['auth-token']);
    if (accountId) {
      return await this.accountService.findById(accountId);
    } else {
      return {};
    }
  }

  @Query()
  async account(obj, args, context, info) {
    return await this.accountService.findById(args.id);
  }

  @Query()
  async accountByName(obj, args, context, info) {
    return await this.accountService.findByName(args.name);
  }

  @ResolveProperty()
  topics(account: Account) {
    return this.topicService.findLatest(20, {accountId: account.id});
  }
}
