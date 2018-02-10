import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AskPageComponent } from './ask-page/ask-page.component';
import { TopicPageComponent } from './topic-page/topic-page.component';

const routes: Routes = [
  {
    path: ':id/:gameName/:title',
    component: TopicPageComponent,
  },
  {
    path: 'ask',
    component: AskPageComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicRoutingModule {
}
