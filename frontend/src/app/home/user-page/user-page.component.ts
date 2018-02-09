import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import {
  getUserPageQuery, getUserPageQueryVariables, getUserTopicsQuery, getUserTopicsQueryVariables, UserPageAccountFragment,
  UserPageTopicsFragment,
} from '../../graphql-meta';
import { homeGql } from '../home.graphql';

@Component({
  selector: 'app-account-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  account: UserPageAccountFragment;

  topics: UserPageTopicsFragment;

  constructor(
    private router: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    const lb = 'account';
    this.router.params
      .pipe(
        pluck('id'),
        distinctUntilChanged(),
        tap(() => {
          this.loadingBar.start(lb);
        }),
        switchMap((id: number) => this.apollo
          .query<getUserPageQuery, getUserPageQueryVariables>({
            query: homeGql.getUserPage,
            variables: {id},
          })),
        map(d => d.data),
        tap(() => {
          this.loadingBar.end(lb);
        }),
      )
      .subscribe((res: getUserPageQuery) => {
        this.account = res.account;
        this.topics = res.account.topics;
        this.cdr.markForCheck();
      });
  }

  nextPage() {
    const lb = 'account';
    this.loadingBar.start(lb);
    this.apollo
      .query<getUserTopicsQuery, getUserTopicsQueryVariables>({
        query: homeGql.getUserTopics,
        variables: {
          accountId: this.account.id,
          nextPageToken: this.topics.nextPageToken,
        },
      })
      .pipe(map(d => d.data))
      .subscribe((res: getUserTopicsQuery) => {
        this.topics = res.topics;
        this.loadingBar.end(lb);
        this.cdr.markForCheck();
      });
  }
}
