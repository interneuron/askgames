import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pictureUrl',
  pure: true,
})
export class PictureUrlPipe implements PipeTransform {
  transform(picture: string) {
    return `http://localhost:4080/pictures/profile/${picture}`;
  }
}
