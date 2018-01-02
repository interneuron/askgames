import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TopicService } from './topic.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class TopicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TopicModule,
      providers: [
        TopicService,
      ],
    };
  }
}
