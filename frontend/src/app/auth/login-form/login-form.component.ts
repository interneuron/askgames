import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  form = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {
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
