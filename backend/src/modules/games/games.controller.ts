import { Controller, Get } from '@nestjs/common';
import { Game } from './game.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private service: GamesService) {
  }

  @Get('list')
  list(): Promise<Game[]> {
    return this.service.findAll();
  }
}
