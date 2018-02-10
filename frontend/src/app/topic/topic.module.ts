import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiFormsModule } from '../ui/ui-forms/ui-forms.module';
import { AskPageComponent } from './ask-page/ask-page.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicUrlModule } from './topic-url/topic-url.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicRoutingModule,
    TopicUrlModule,
    UiFormsModule,
  ],
  declarations: [
    TopicPageComponent,
    AskPageComponent,
  ],
})
export class TopicModule {
}
