import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, } from '@angular/core';
import { KitFocusManagerService, KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal2',
  templateUrl: './ui-modal2.component.html',
  styleUrls: ['./ui-modal2.component.scss'],
  providers: [
    KitFocusManagerService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(-50%, -50px)',
        }),
        animate('250ms', style({
          opacity: 1,
          transform: 'translate(-50%, 0)',
        })),
      ]),
    ]),
  ],
})
export class UiModal2Component implements OnInit {
  @Input() title: string;

  @HostBinding('@host') hostTrigger: void;

  constructor(
    private ref: KitModalRef<UiModal2Component>,
    private fm: KitFocusManagerService,
  ) {
  }

  ngOnInit() {
    this.fm.autoCapture = true;
    this.fm.init();
  }

  close() {
    this.ref.close();
  }
}
