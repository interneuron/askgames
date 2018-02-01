import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import { getAccountByName } from '../../account/account.graphql';
import { getAccountByNameQuery } from '../../graphql-meta';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent implements OnInit {
  data = new BehaviorSubject<getAccountByNameQuery>(null);

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
        pluck('name'),
        distinctUntilChanged(),
        tap(() => {
          this.loadingBar.start(lb);
        }),
        map((name: string) => name.slice(1)),
        switchMap((name: string) => this.apollo
          .query<getAccountByNameQuery>({
            query: getAccountByName,
            variables: {name},
          })),
        map(d => d.data),
        tap(() => {
          this.loadingBar.end(lb);
        }),
      )
      .subscribe(this.data);
  }
}
