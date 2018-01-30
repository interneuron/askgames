import { Injectable } from '@angular/core';
import { KitPlatformService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { createSessionMutation, createSessionMutationVariables, getAuthAccountQuery, } from '../graphql-meta';
import { createSession, getAuthAccount } from './auth.graphql';

@Injectable()
export class AuthService {
  private _isAuth = new BehaviorSubject<boolean>(false);

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
      }
    }
  }

  get isAuth(): boolean {
    return this._isAuth.value;
  }

  get isAuthChanges(): Observable<boolean> {
    return this._isAuth.asObservable();
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

  private loadAuthAccount() {
    this.apollo
      .query<getAuthAccountQuery>({
        query: getAuthAccount,
      })
      .subscribe(res => {
        if (res.data.authAccount) {
          this._isAuth.next(true);
        }
      });
  }
}
