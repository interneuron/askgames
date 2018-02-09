import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { config } from '../../config';
import { topicAnswerRepoToken, topicCommentRepoToken, topicRepoToken } from './meta';
import { TopicAnswer } from './topic-answer.entity';
import { TopicComment } from './topic-comment.entity';
import { Topic } from './topic.entity';

@Component()
export class TopicService {
  constructor(
      @Inject(topicRepoToken) private readonly topicRepo: Repository<Topic>,
      @Inject(topicAnswerRepoToken) private readonly topicAnswerRepo: Repository<TopicAnswer>,
      @Inject(topicCommentRepoToken) private readonly topicCommentRepo: Repository<TopicComment>,
  ) {
  }

  async findLatest(params: any): Promise<Topic[]> {
    const query = this.topicRepo.createQueryBuilder()
        .take(config.pageSize + 1)
        .where({block: false})
        .addOrderBy('datetime', 'DESC');
    if (params.accountId) {
      query.where({accountId: params.accountId});
    }
    if (params.nextPageToken) {
      query.andWhere('id <= :token', {token: params.nextPageToken});
    }
    return query.getMany();
//        .find({
//      take: config.pageSize + 1,
//      where: {block: false, ...params},
//      order: {datetime: 'DESC'},
//    });
  }

  async findById(id: number): Promise<Topic> {
    return await this.topicRepo.findOne({id});
  }

  async findAnswers(topicId: number): Promise<TopicAnswer[]> {
    return await this.topicAnswerRepo.find({topicId});
  }

  async findCommentsByTopicId(topicId: number): Promise<TopicComment[]> {
    return await this.topicCommentRepo.find({topicId});
  }

  async findCommentsByAnswerId(answerId: number): Promise<TopicComment[]> {
    return await this.topicCommentRepo.find({answerId});
  }
}
