import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KitNotificationService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { map, pluck } from 'rxjs/operators';
import {
  CreateTopicForm,
  createTopicMutation, createTopicMutationVariables,
} from '../../graphql-meta';
import { TopicUrlPipe } from '../topic-url/topic-url.pipe';
import { topicGql } from '../topic.graphql';

@Component({
  selector: 'app-ask-page',
  templateUrl: './ask-page.component.html',
  styleUrls: ['./ask-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TopicUrlPipe],
})
export class AskPageComponent implements OnInit {
  @ViewChild('ngForm') ngForm: NgForm;

  form: CreateTopicForm = {
    gameId: null,
    title: '',
  };

  constructor(
    private apollo: Apollo,
    private notifications: KitNotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private topicUrl: TopicUrlPipe,
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(pluck('gameId'))
      .subscribe((gameId: number) => {
        this.form.gameId = gameId;
      });
  }

  submit() {
    if (this.ngForm.valid) {
      this.apollo
        .mutate<createTopicMutation, createTopicMutationVariables>({
          mutation: topicGql.createTopic,
          variables: {
            form: this.form,
          },
        })
        .pipe(map(res => res.data))
        .subscribe((data: createTopicMutation) => {
          this.notifications.open({type: 'success', message: 'Topic created!'});
          this.router.navigate(this.topicUrl.transform(data.createTopic.topic));
        });
    }
  }
}
