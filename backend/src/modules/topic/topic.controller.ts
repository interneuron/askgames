import { Controller, Get } from '@nestjs/common';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private service: TopicService) {
  }

  @Get('latest')
  latest(): Promise<Topic[]> {
    return this.service.findLatest();
  }
}
