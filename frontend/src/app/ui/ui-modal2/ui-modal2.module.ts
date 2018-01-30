import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiModal2FooterComponent } from './ui-modal2-footer/ui-modal2-footer.component';
import { UiModal2Component } from './ui-modal2/ui-modal2.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiModal2Component,
    UiModal2FooterComponent,
  ],
  exports: [
    KitOverlayModule,
    UiModal2Component,
    UiModal2FooterComponent,
  ],
})
export class UiModal2Module {
}
