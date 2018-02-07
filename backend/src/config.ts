/**
 * App config interface.
 */
export interface Config {
  debug: boolean,
  database: {
    host: string,
    port: string,
    username: string,
    dbname: string,
    password: string,
  },
  google: {
    clientId: string,
  }
  storePath: string,
}

export const config: Config = require('../config.json');
