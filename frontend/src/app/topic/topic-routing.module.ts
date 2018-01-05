import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './topic-page/topic-page.component';

const routes: Routes = [
  {
    path: ':id/:gameName/:title',
    component: TopicPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicRoutingModule {
}
