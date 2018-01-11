import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiSideNavItemComponent } from './ui-side-nav-item/ui-side-nav-item.component';
import { UiSideNavComponent } from './ui-side-nav/ui-side-nav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiSideNavComponent,
    UiSideNavItemComponent,
  ],
  exports: [
    UiSideNavComponent,
    UiSideNavItemComponent,
  ],
})
export class UiSideNavModule {
}
