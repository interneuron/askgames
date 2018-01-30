import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  submit() {
    this.authService.createSession(this.form).subscribe(res => {
      if (res.success) {
        alert('LOGIN IS SUCCESS');
      } else {
        alert(res.error);
      }
    });
  }
}
