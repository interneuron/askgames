import { createConnection } from 'typeorm';
import { dbConnectionToken } from './meta';

export const dbProviders = [
  {
    provide: dbConnectionToken,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'askgames',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
  },
];
