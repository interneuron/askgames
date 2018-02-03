import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KitLoadingBarService, KitNotificationService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../../auth/auth.service';
import { getAccountByNameQuery, updateSettingsMutation, updateSettingsMutationVariables } from '../../graphql-meta';
import { resizeImage } from '../../util/resize-image';
import { getAccountByName, updateSettings } from '../account.graphql';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  @ViewChild('ngForm') ngForm: NgForm;

  loaded = false;

  form: {
    about?: string;
    pictureData?: string;
  } = {};

  accountPicture: string;

  constructor(
    private apollo: Apollo,
    private loadingBar: KitLoadingBarService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private notifications: KitNotificationService,
  ) {
  }

  ngOnInit() {
    const lb = 'account';
    this.loadingBar.start(lb);
    this.apollo
      .query<getAccountByNameQuery>({
        query: getAccountByName,
        variables: {
          name: this.auth.authAccount.name,
        },
      })
      .subscribe(res => {
        this.form.about = res.data.accountByName.about;
        this.accountPicture = res.data.accountByName.picture;
        this.loadingBar.end(lb);
        this.loaded = true;
        this.cdr.markForCheck();
      });
  }

  submit() {
    if (this.ngForm.valid) {
      this.apollo
        .mutate<updateSettingsMutation, updateSettingsMutationVariables>({
          mutation: updateSettings,
          variables: {
            form: this.form,
          },
        })
        .subscribe(res => {
          this.notifications.open({type: 'success', message: 'Profile settings updated!'});
        });
    }
  }

  pickPicture(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      resizeImage(e.target.result, 300, 300).subscribe(tmpPd => {
        resizeImage(tmpPd, 150, 150).subscribe(pd => {
          this.form.pictureData = pd;
          this.cdr.markForCheck();
        });
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
