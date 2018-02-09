import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageAnswersComponent } from './user-page-answers/user-page-answers.component';
import { UserPageTopicsComponent } from './user-page-topics/user-page-topics.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'user/:id',
    component: UserPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'topics',
        pathMatch: 'full',
      },
      {
        path: 'topics',
        component: UserPageTopicsComponent,
      },
      {
        path: 'answers',
        component: UserPageAnswersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
