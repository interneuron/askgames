import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import {
  getUserPageQuery, getUserPageQueryVariables, UserPageAccountFragment,
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

  constructor(
    private router: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    const lb = 'user-page';
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
      )
      .subscribe((res: getUserPageQuery) => {
        this.account = res.account;
        this.loadingBar.end(lb);
        this.cdr.markForCheck();
      });
  }
}
