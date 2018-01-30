import { ChangeDetectionStrategy, Component, } from '@angular/core';

@Component({
  selector: 'ui-modal2-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-modal2-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModal2FooterComponent {
}
