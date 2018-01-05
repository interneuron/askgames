import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { topicAnswerRepoToken, topicRepoToken } from './meta';
import { TopicAnswer } from './topic-answer.entity';
import { Topic } from './topic.entity';

@Component()
export class TopicService {
  constructor(
      @Inject(topicRepoToken) private readonly topicRepo: Repository<Topic>,
      @Inject(topicAnswerRepoToken) private readonly topicAnswerRepo: Repository<TopicAnswer>,
  ) {
  }

  async findLatest(take = 20): Promise<Topic[]> {
    return await this.topicRepo.find({
      take,
      where: {block: false},
      order: {datetime: 'DESC'},
    });
  }

  async findById(id: number): Promise<Topic> {
    return await this.topicRepo.findOne({id});
  }

  async findAnswers(topicId: number): Promise<TopicAnswer[]> {
    return await this.topicAnswerRepo.find({topicId});
  }
}
