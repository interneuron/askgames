import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import { accountGql } from '../../account/account.graphql';
import { getUserPageQuery, getUserPageQueryVariables } from '../../graphql-meta';

@Component({
  selector: 'app-account-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  data = new BehaviorSubject<getUserPageQuery>(null);

  constructor(
    private router: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
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
            query: accountGql.getUserPage,
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
