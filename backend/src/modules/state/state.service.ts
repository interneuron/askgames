import { Component } from '@nestjs/common';
import { createClient, RedisClient } from 'redis';

@Component()
export class StateService {
  private _client: RedisClient;

  constructor() {
    // @todo setup connection auth
    this._client = createClient();
  }

  get client(): RedisClient {
    return this._client;
  }
}
