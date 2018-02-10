import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { config } from '../../config';
import { answerRepoToken, commentRepoToken, topicRepoToken } from './meta';
import { Answer } from './answer.entity';
import { Comment } from './comment.entity';
import { Topic } from './topic.entity';

@Component()
export class TopicService {
  constructor(
      @Inject(topicRepoToken) private readonly topicRepo: Repository<Topic>,
      @Inject(answerRepoToken) private readonly answerRepo: Repository<Answer>,
      @Inject(commentRepoToken) private readonly commentRepo: Repository<Comment>,
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
  }

  async findById(id: number): Promise<Topic> {
    return await this.topicRepo.findOne({id});
  }

  async findTopicAnswers(topicId: number): Promise<Answer[]> {
    return await this.answerRepo.find({topicId, block: false});
  }

  async findAnswers(params: any): Promise<Answer[]> {
    const query = this.answerRepo.createQueryBuilder()
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
  }

  async findCommentsByTopicId(topicId: number): Promise<Comment[]> {
    return await this.commentRepo.find({topicId});
  }

  async findCommentsByAnswerId(answerId: number): Promise<Comment[]> {
    return await this.commentRepo.find({answerId});
  }

  async createTopic(accountId: number, form: {gameId: number; title: string; text: string}): Promise<Topic> {
    if (form.gameId && form.title) {
      const topic = new Topic();
      topic.accountId = accountId;
      topic.gameId = form.gameId;
      topic.title = form.title;
      topic.text = form.text;
      topic.rate = 0;
      await this.topicRepo.save(topic);
      return topic;
    } else {
      throw new Error('createTopic form invalid');
    }
  }
}
