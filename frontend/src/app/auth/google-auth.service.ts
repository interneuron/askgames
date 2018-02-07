import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { GoogleAuthData } from './meta';

declare let gapi: any;

@Injectable()
export class GoogleAuthService {

  private googleAuth;

  private signedUser = new Subject<GoogleAuthData>();

  constructor(private zone: NgZone) {
    this.init();
  }

  init() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client:platform.js';
    script.onload = () => {
      gapi.load('auth2', () => {
        // @todo put params to env
        const myParams = {
          'client_id': '305616509816-ppv64udf35mm3jfglkeloc2m1mucnvg1.apps.googleusercontent.com',
          'scope': 'email',
        };
        this.googleAuth = gapi.auth2.init(myParams);

        this.googleAuth.currentUser.listen(googleUser => {
          if (googleUser) {
            this.signedUser.next({
              id: googleUser.getId(),
              access_token: googleUser.getAuthResponse().access_token,
            });
          }
        });
      });
    };
    document.head.appendChild(script);
  }

  signIn(): Observable<GoogleAuthData> {
    this.googleAuth.signIn();
    return this.signedUser.pipe(take(1));
  }
}
