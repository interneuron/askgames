import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import {
  getUserPageQuery, getUserPageQueryVariables, getUserTopicsQuery,
  getUserTopicsQueryVariables, UserPageTopicsFragment,
} from '../../graphql-meta';
import { homeGql } from '../home.graphql';

@Component({
  selector: 'app-user-page-topics',
  templateUrl: './user-page-topics.component.html',
  styleUrls: ['./user-page-topics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageTopicsComponent implements OnInit {
  accountId: number;

  topics: UserPageTopicsFragment;

  private readonly lb = 'user-page-topics';

  constructor(
    private router: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.router.parent.params
      .pipe(
        pluck('id'),
        distinctUntilChanged(),
        tap((id: number) => {
          this.accountId = id;
          this.loadingBar.start(this.lb);
        }),
        switchMap((id: number) => this.apollo
          .query<getUserTopicsQuery, getUserTopicsQueryVariables>({
            query: homeGql.getUserTopics,
            variables: {
              accountId: id,
            },
          })),
        map(d => d.data),
      )
      .subscribe((res: getUserTopicsQuery) => {
        this.topics = res.topics;
        this.loadingBar.end(this.lb);
        this.cdr.markForCheck();
      });
  }

  nextPage() {
    this.loadingBar.start(this.lb);
    this.apollo
      .query<getUserTopicsQuery, getUserTopicsQueryVariables>({
        query: homeGql.getUserTopics,
        variables: {
          accountId: this.accountId,
          nextPageToken: this.topics.nextPageToken,
        },
      })
      .pipe(map(d => d.data))
      .subscribe((res: getUserTopicsQuery) => {
        this.topics = res.topics;
        this.loadingBar.end(this.lb);
        this.cdr.markForCheck();
      });
  }
}
