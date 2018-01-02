import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { gameRepositoryToken } from './meta';

@Component()
export class GameService {
  constructor(
      @Inject(gameRepositoryToken) private readonly gameRepository: Repository<Game>) {
  }

  async findAll(): Promise<Game[]> {
    return await this.gameRepository.find({take: 50});
  }
}
