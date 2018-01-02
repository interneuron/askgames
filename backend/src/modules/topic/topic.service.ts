import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { topicRepositoryToken } from './meta';
import { Topic } from './topic.entity';

@Component()
export class TopicService {
  constructor(
      @Inject(topicRepositoryToken) private readonly topicRepository: Repository<Topic>) {
  }

  async findLatest(take = 20): Promise<Topic[]> {
    return await this.topicRepository.find({
      take,
      where: {block: false},
      order: {datetime: 'DESC'},
    });
  }
}
