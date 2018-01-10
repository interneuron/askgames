import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { topicAnswerRepoToken, topicCommentRepoToken, topicRepoToken } from './meta';
import { TopicAnswer } from './topic-answer.entity';
import { TopicComment } from './topic-comment.entity';
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
  {
    provide: topicCommentRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(TopicComment),
    inject: [dbConnectionToken],
  },
];
