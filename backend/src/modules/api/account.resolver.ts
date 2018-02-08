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
  account(obj, args, context, info) {
    return this.accountService.findById(args.id);
  }

  @Query()
  accountByName(obj, args, context, info) {
    return this.accountService.findByName(args.name);
  }

  @ResolveProperty()
  topics(account: Account) {
    return this.topicService.findLatest(20, {accountId: account.id});
  }

  @Mutation()
  createSession(obj, {email, password}) {
    return this.accountService.createSession(email, password);
  }

  @Mutation()
  createGoogleSession(obj, {id, access_token}) {
    return this.accountService.createGoogleSession(id, access_token);
  }

  @Mutation()
  async destroySession(obj) {
    const token = obj.headers['auth-token'];
    const accountId = await this.accountService.isAuth(token);
    if (accountId) {
      return this.accountService.removeToken(token);
    }
  }

  @Mutation()
  async updateSettings(obj, {form}) {
    const accountId = await this.accountService.isAuth(obj.headers['auth-token']);
    if (accountId) {
      return this.accountService.updateSettings(accountId, form);
    } else {
      return {};
    }
  }

  @Mutation()
  registration(obj, {form}) {
    return this.accountService.registration(form);
  }
}
