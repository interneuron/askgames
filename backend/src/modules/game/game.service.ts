import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { gameRepoToken } from './meta';

@Component()
export class GameService {
  constructor(
      @Inject(gameRepoToken) private readonly gameRepo: Repository<Game>) {
  }

  async findAll(): Promise<Game[]> {
    return await this.gameRepo.find({take: 50});
  }

  async findById(id: number): Promise<Game> {
    return await this.gameRepo.findOne({id});
  }
}
