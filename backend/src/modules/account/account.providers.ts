import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { Account } from './account.entity';
import { accountRepoToken } from './meta';

export const accountProviders = [
  {
    provide: accountRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: [dbConnectionToken],
  },
];
