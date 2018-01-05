import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { accountProviders } from './account.providers';
import { AccountService } from './account.service';

@Module({
  imports: [
    DbModule,
  ],
  components: [
    ...accountProviders,
    AccountService,
  ],
  exports: [
    AccountService,
  ],
})
export class AccountModule {
}
