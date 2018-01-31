import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KitAnchorModule, KitOutsideClickModule, KitOverlayModule } from '@ngx-kit/core';
import { AuthModule } from '../auth/auth.module';
import { UiButtonModule } from '../ui/ui-button';
import { UiDropdownModule } from '../ui/ui-dropdown/ui-dropdown.module';
import { UiTextModule } from '../ui/ui-text';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiButtonModule,
    UiTextModule,
    AuthModule,
    KitOverlayModule,
    KitAnchorModule,
    KitOutsideClickModule,
    UiDropdownModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
