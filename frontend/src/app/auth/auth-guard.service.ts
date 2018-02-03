import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.isAuthChanges.pipe(
      filter(isAuth => isAuth === true || isAuth === false),
      tap((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigate(['/']);
        }
      }),
    );
  }
}
