import { Injectable } from '@angular/core';
import { KitPlatformService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map, mapTo } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import {
  createSessionMutation, createSessionMutationVariables, DestroySessionMutation,
  getAuthAccountQuery,
} from '../graphql-meta';
import { authQueries, createSession, getAuthAccount } from './auth.graphql';
import { IsAuthState } from './meta';

@Injectable()
export class AuthService {
  private _isAuth = new BehaviorSubject<IsAuthState>(null);

  private _authAccount = new BehaviorSubject<any>(null);

  private token: string;

  constructor(
    private apollo: Apollo,
    private api: ApiService,
    private platform: KitPlatformService,
  ) {
    if (platform.isBrowser()) {
      this.token = localStorage.getItem('auth-token');
      if (this.token) {
        this.api.token = this.token;
        this.loadAuthAccount();
      } else {
        this._isAuth.next(false);
      }
    }
  }

  get isAuth(): IsAuthState {
    return this._isAuth.value;
  }

  get isAuthChanges(): Observable<IsAuthState> {
    return this._isAuth.asObservable();
  }

  get authAccountChanges(): Observable<any> {
    return this._authAccount.asObservable();
  }

  get authAccount(): any {
    return this._authAccount.value;
  }

  createSession(variables: createSessionMutationVariables): Observable<{success: boolean; error?: string}> {
    return this.apollo
      .mutate<createSessionMutation>({
        mutation: createSession,
        variables,
      })
      .pipe(
        map(res => res.data),
        map((res: createSessionMutation) => {
          if (res.createSession) {
            if (res.createSession.token) {
              this.token = res.createSession.token;
              this.api.token = this.token;
              if (this.platform.isBrowser()) {
                localStorage.setItem('auth-token', this.token);
              }
              this.loadAuthAccount();
              return {success: true};
            } else {
              return {success: false, error: res.createSession.error};
            }
          } else {
            return {success: false, error: 'invalid_response'};
          }
        }),
      );
  }

  destroySession(): Observable<boolean> {
    return this.apollo
      .mutate<DestroySessionMutation>({
        mutation: authQueries.destroySession,
      })
      .pipe(
        map(res => res.data),
        map((res: DestroySessionMutation) => {
          this.token = null;
          this.api.token = this.token;
          this._isAuth.next(false);
          this._authAccount.next(null);
          if (this.platform.isBrowser()) {
            localStorage.setItem('auth-token', this.token);
          }
        }),
        mapTo(true),
      );
  }

  private loadAuthAccount() {
    this.apollo
      .query<getAuthAccountQuery>({
        query: getAuthAccount,
      })
      .subscribe(res => {
        if (res.data.authAccount) {
          this._isAuth.next(true);
          this._authAccount.next(res.data.authAccount);
        } else {
          this._isAuth.next(false);
        }
      });
  }
}
