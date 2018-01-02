import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { topicRepositoryToken } from './meta';
import { Topic } from './topic.entity';

export const topicProviders = [
  {
    provide: topicRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Topic),
    inject: [dbConnectionToken],
  },
];
