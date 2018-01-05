import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { topicAnswerRepoToken, topicRepoToken } from './meta';
import { TopicAnswer } from './topic-answer.entity';
import { Topic } from './topic.entity';

export const topicProviders = [
  {
    provide: topicRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Topic),
    inject: [dbConnectionToken],
  },
  {
    provide: topicAnswerRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(TopicAnswer),
    inject: [dbConnectionToken],
  },
];
