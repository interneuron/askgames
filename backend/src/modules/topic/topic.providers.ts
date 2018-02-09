import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { answerRepoToken, commentRepoToken, topicRepoToken } from './meta';
import { Answer } from './answer.entity';
import { Comment } from './comment.entity';
import { Topic } from './topic.entity';

export const topicProviders = [
  {
    provide: topicRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Topic),
    inject: [dbConnectionToken],
  },
  {
    provide: answerRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Answer),
    inject: [dbConnectionToken],
  },
  {
    provide: commentRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: [dbConnectionToken],
  },
];
