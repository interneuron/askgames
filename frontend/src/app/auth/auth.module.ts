import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiFormsModule } from '../ui/ui-forms/ui-forms.module';
import { UiModal2Module } from '../ui/ui-modal2';
import { UiTabsModule } from '../ui/ui-tabs/ui-tabs.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { GoogleAuthService } from './google-auth.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiModal2Module,
    FormsModule,
    UiTabsModule,
    UiFormsModule,
  ],
  declarations: [
    AuthModalComponent,
    LoginFormComponent,
    RegistrationFormComponent,
  ],
  exports: [],
  providers: [
    GoogleAuthService,
  ],
  entryComponents: [
    AuthModalComponent,
  ],
})
export class AuthModule {
}
