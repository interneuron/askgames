import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { StateModule } from '../state/state.module';
import { accountProviders } from './account.providers';
import { AccountService } from './account.service';

@Module({
  imports: [
    DbModule,
    StateModule,
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
