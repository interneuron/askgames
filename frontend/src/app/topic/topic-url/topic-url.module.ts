import { NgModule } from '@angular/core';
import { TopicUrlPipe } from './topic-url.pipe';

@NgModule({
  declarations: [TopicUrlPipe],
  exports: [TopicUrlPipe],
})
export class TopicUrlModule {
}
