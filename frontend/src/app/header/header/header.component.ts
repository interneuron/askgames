import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { KitModalService } from '@ngx-kit/core';
import { Observable } from 'rxjs/Observable';
import { AuthModalComponent } from '../../auth/auth-modal/auth-modal.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  authAccountChanges: Observable<boolean>;

  displayMenu = false;

  constructor(
    private modalService: KitModalService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.authAccountChanges = this.authService.authAccountChanges;
    this.authAccountChanges.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  showAuthModal() {
    this.modalService.show(AuthModalComponent);
  }

  logout() {
    this.authService.destroySession().subscribe(() => {
    });
  }
}
