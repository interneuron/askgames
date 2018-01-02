import { Controller, Get } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(private service: GameService) {
  }

  @Get('list')
  list(): Promise<Game[]> {
    return this.service.findAll();
  }
}
