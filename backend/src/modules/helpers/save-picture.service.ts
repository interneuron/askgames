import { Component } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { config } from '../../config';

@Component()
export class SavePictureService {
  constructor() {
  }

  save(dir, prefix, data): string {
    const crypto = require('crypto');
    const base64Data = data.replace(/^data:image\/png;base64,/, '');
    const dirPath = resolve(config.storePath, dir);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath);
    }
    const filename = `${prefix}_${crypto.randomBytes(20).toString('hex')}.png`;
    writeFileSync(resolve(dirPath, filename), base64Data, 'base64');
    return filename;
  };
}
