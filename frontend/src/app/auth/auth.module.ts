import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModal2Module } from '../ui/ui-modal2';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    UiModal2Module,
    FormsModule,
  ],
  declarations: [
    AuthModalComponent,
  ],
  exports: [],
  providers: [],
  entryComponents: [
    AuthModalComponent,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
      ],
    };
  }
}
