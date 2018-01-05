import { Connection } from 'typeorm';
import { dbConnectionToken } from '../db/meta';
import { Game } from './game.entity';
import { gameRepoToken } from './meta';

export const gameProviders = [
  {
    provide: gameRepoToken,
    useFactory: (connection: Connection) => connection.getRepository(Game),
    inject: [dbConnectionToken],
  },
];
