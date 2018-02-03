import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PictureUrlPipe } from './picture-url.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PictureUrlPipe,
  ],
  exports: [
    PictureUrlPipe,
  ],
  providers: [],
})
export class PictureUrlModule {
}
