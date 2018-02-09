import { Component } from '@nestjs/common';
import { config } from '../../config';

@Component()
export class PaginatorService {
  wrap<T>(entries: T[], tokenField = 'id'): {entries: T[], nextPageToken: any} {
    return {
      entries: entries.slice(0, config.pageSize),
      nextPageToken: entries.length > config.pageSize
          ? entries[config.pageSize][tokenField]
          : null,
    };
  }
}
