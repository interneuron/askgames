import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
  form = {
    displayName: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {
  }

  submit() {
    this.authService.registration({form: this.form}).subscribe(res => {
      if (res.success) {
        alert('REGISTRATION&LOGIN IS SUCCESS');
      } else {
        alert(res.error);
      }
    });
  }
}
