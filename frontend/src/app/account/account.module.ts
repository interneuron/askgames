import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitRefModule } from '@ngx-kit/core';
import { AuthGuardService } from '../auth/auth-guard.service';
import { UiBreadcrumbsModule } from '../ui/ui-breadcrumbs/ui-breadcrumbs.module';
import { UiFormsModule } from '../ui/ui-forms/ui-forms.module';
import { AccountRoutingModule } from './account-routing.module';
import { PictureUrlModule } from '../common/picture-url/picture-url.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    KitRefModule,
    UiBreadcrumbsModule,
    UiFormsModule,
    PictureUrlModule,
  ],
  declarations: [
    SettingsPageComponent,
  ],
  providers: [
    AuthGuardService,
  ],
})
export class AccountModule {
}
