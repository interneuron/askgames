import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
  ],
})
export class AuthForRootModule {
}
