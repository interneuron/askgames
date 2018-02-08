import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitModule, KitPlatformBrowserModule, KitRootModule } from '@ngx-kit/core';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { TopicForRootModule } from './topic/topic-for-root.module';
import { UiLoadingBarModule } from './ui/ui-loading-bar/ui-loading-bar.module';
import { UiNotificationModule } from './ui/ui-notification/ui-notification.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    KitRootModule,
    KitModule,
    KitPlatformBrowserModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    HeaderModule,
    TopicForRootModule,
    UiLoadingBarModule,
    AuthModule.forRoot(),
    ApiModule,
    UiNotificationModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
