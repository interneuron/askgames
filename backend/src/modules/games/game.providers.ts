import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { Game } from './game.entity';
import { gameRepositoryToken } from './meta';

export const gameProviders = [
  {
    provide: gameRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Game),
    inject: [dbConnectionToken],
  },
];
