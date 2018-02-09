import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import {
  getUserAnswersQuery, getUserAnswersQueryVariables, UserPageAnswersFragment,
} from '../../graphql-meta';
import { homeGql } from '../home.graphql';

@Component({
  selector: 'app-user-page-answers',
  templateUrl: './user-page-answers.component.html',
  styleUrls: ['./user-page-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageAnswersComponent implements OnInit {
  accountId: number;

  answers: UserPageAnswersFragment;

  private readonly lb = 'user-page-answers';

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
          .query<getUserAnswersQuery, getUserAnswersQueryVariables>({
            query: homeGql.getUserAnswers,
            variables: {
              accountId: id,
            },
          })),
        map(d => d.data),
      )
      .subscribe((res: getUserAnswersQuery) => {
        this.answers = res.answers;
        this.loadingBar.end(this.lb);
        this.cdr.markForCheck();
      });
  }

  nextPage() {
    const lb = 'user-page-answers';
    this.loadingBar.start(lb);
    this.apollo
      .query<getUserAnswersQuery, getUserAnswersQueryVariables>({
        query: homeGql.getUserAnswers,
        variables: {
          accountId: this.accountId,
          nextPageToken: this.answers.nextPageToken,
        },
      })
      .pipe(map(d => d.data))
      .subscribe((res: getUserAnswersQuery) => {
        this.answers = res.answers;
        this.loadingBar.end(lb);
        this.cdr.markForCheck();
      });
  }
}
