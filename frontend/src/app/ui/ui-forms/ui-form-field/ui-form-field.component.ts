import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  templateUrl: './ui-form-field.component.html',
  styleUrls: ['./ui-form-field.component.scss'],
})
export class UiFormFieldComponent {
  @Input() label: string;
}
