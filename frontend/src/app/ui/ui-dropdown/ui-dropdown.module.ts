import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDropdownComponent } from './ui-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiDropdownComponent,
  ],
  exports: [
    UiDropdownComponent,
  ],
  providers: [],
})
export class UiDropdownModule {
}
