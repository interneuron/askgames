import { Component, Inject } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { Repository } from 'typeorm';
import { uuid } from '../../util/uuid';
import { StateService } from '../state/state.service';
import { Account } from './account.entity';
import { accountRepoToken, CreateSessionResponse } from './meta';

@Component()
export class AccountService {
  constructor(
      @Inject(accountRepoToken) private readonly accountRepo: Repository<Account>,
      private state: StateService,
  ) {

  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepo.find({take: 50});
  }

  async findById(id: number): Promise<Account> {
    return await this.accountRepo.findOne({id});
  }

  async createSession(email: string, password: string): Promise<CreateSessionResponse> {
    const account = await this.accountRepo.findOne({email});
    this.state.client.keys('*', function (err, res) {
    });
    if (account) {
      // const hash = hashSync(password); <-- need for registration
      if (compareSync(password, account.password)) {
        const token = uuid();
        // @todo add EXPIRE
        this.state.client.set(token, account.id.toString(), function (err, res) {
        });
        return {
          accountId: account.id,
          token,
        };
      } else {
        return {
          error: 'invalid_email_or_password',
        }
      }
    } else {
      return {
        error: 'invalid_email_or_password',
      }
    }
  }

  async isAuth(token: string): Promise<number | null> {
    return new Promise<number | null>(resolve => {
      this.state.client.get(token, function (err, res) {
        if (res) {
          resolve(parseInt(res, 10));
        } else {
          resolve(null);
        }
      });
    });
  }
}
