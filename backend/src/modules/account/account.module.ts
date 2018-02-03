import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { EnvService } from '../env.service';
import { SavePictureService } from '../helpers/save-picture.service';
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
    EnvService,
    SavePictureService,
  ],
  exports: [
    AccountService,
  ],
})
export class AccountModule {
}
