import { Pipe, PipeTransform } from '@angular/core';
import { convertToUrl } from '../../util/convert-to-url';

@Pipe({
  name: 'topicUrl',
  pure: true,
})
export class TopicUrlPipe implements PipeTransform {
  transform(topic: {id: number, title: string, game: {name: string}}) {
    return ['/q', topic.id, convertToUrl(topic.game.name), convertToUrl(topic.title)];
  }
}
