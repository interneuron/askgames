import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import { getTopicQuery } from '../../graphql-meta';
import { getTopic } from '../topic.graphql';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss'],
})
export class TopicPageComponent implements OnInit {
  data = new BehaviorSubject<getTopicQuery>(null);

  constructor(
    private route: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
  ) {
  }

  ngOnInit() {
    const lb = 'topic';
    this.route.params
      .pipe(
        pluck('id'),
        distinctUntilChanged(),
        tap(() => {
          this.loadingBar.start(lb);
        }),
        switchMap((id: string) => this.apollo
          .query<getTopicQuery>({
            query: getTopic,
            variables: {id},
          })),
        map(d => d.data),
        tap(() => {
          this.loadingBar.end(lb);
        }),
      )
      .subscribe(this.data);
  }
}
