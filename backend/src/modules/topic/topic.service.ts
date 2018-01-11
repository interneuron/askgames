import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
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

  async findLatest(take, params: any): Promise<Topic[]> {
    return await this.topicRepo.find({
      take,
      where: {block: false, ...params},
      order: {datetime: 'DESC'},
    });
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
