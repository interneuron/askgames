import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicUrlModule } from './topic-url/topic-url.module';

@NgModule({
  imports: [
    CommonModule,
    TopicRoutingModule,
    TopicUrlModule,
  ],
  declarations: [
    TopicPageComponent,
  ],
})
export class TopicModule {
}
