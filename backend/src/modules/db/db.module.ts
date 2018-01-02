import { Module } from '@nestjs/common';
import { dbProviders } from './db.providers';

@Module({
  components: [
    ...dbProviders,
  ],
  exports: [
    ...dbProviders,
  ],
})
export class DbModule {
}
