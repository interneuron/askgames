import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { accountRepoToken } from './meta';

@Component()
export class AccountService {
  constructor(
      @Inject(accountRepoToken) private readonly accountRepo: Repository<Account>) {
  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepo.find({take: 50});
  }

  async findById(id: number): Promise<Account> {
    return await this.accountRepo.findOne({id});
  }
}
