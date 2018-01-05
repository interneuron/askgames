import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiButtonModule } from '../ui/ui-button';
import { UiModalModule } from '../ui/ui-modal/ui-modal.module';
import { UiTextModule } from '../ui/ui-text';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
    UiButtonModule,
    UiModalModule,
    UiTextModule,
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
