import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormFieldComponent } from './ui-form-field/ui-form-field.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiFormFieldComponent,
  ],
  exports: [
    UiFormFieldComponent,
  ],
  providers: [],
})
export class UiFormsModule {
}
