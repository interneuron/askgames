import { Pipe, PipeTransform } from '@angular/core';
import { convertToUrl } from '../../util/convert-to-url';

@Pipe({
  name: 'gameUrl',
  pure: true,
})
export class GameUrlPipe implements PipeTransform {
  transform(game: {id: number, name: string}) {
    return ['/game', game.id, convertToUrl(game.name)];
  }
}
