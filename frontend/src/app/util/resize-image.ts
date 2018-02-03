import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export function resizeImage(src, resultWidth, resultHeight): Observable<string> {
  return new Observable<string>((observer: Observer<string>) => {
    const canvas = document.createElement('canvas');
    const img = document.createElement('img');
    img.src = src;
    img.onload = function () {
      const imageWidth = img.width;
      const imageHeight = img.height;
      const imageCoef = imageWidth / imageHeight;
      const resultCoef = resultWidth / resultHeight;

      let sx = 0;
      let sy = 0;
      let swidth = imageWidth;
      let sheight = imageHeight;
      if (resultCoef < imageCoef) {
        swidth = sheight * resultCoef;
        sx = (imageWidth - swidth) / 2;
      } else {
        sheight = swidth * resultCoef;
        sy = (imageHeight - sheight) / 2;
      }

      canvas.width = resultWidth;
      canvas.height = resultHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, swidth, sheight, 0, 0, resultWidth, resultHeight);

      observer.next(canvas.toDataURL('image/png'));
      observer.complete();
    };
  });
}
