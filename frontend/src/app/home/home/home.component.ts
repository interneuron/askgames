import { Component, OnInit } from '@angular/core';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { getLatestTopicsQuery } from '../../graphql-meta';
import { getLatestTopics } from '../../topic/topic.graphql';
import { TopicService } from '../../topic/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: getLatestTopicsQuery;

  constructor(
    private topicService: TopicService,
    private apollo: Apollo,
    private loadingBar: KitLoadingBarService,
  ) {
  }

  ngOnInit() {
    this.loadingBar.start('home');
    this.apollo
      .query<getLatestTopicsQuery>({query: getLatestTopics})
      .subscribe(d => {
        this.data = d.data;
        this.loadingBar.end('home');
      });
  }
}
