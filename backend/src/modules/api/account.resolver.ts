import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from '../account/account.service';

@Resolver('Game')
export class AccountResolver {
  constructor(
      private accountService: AccountService,
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
}
