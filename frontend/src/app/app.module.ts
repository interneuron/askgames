import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitModule, KitPlatformBrowserModule, KitRootModule } from '@ngx-kit/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { TopicModule } from './topic/topic.module';
import { UiLoadingBarModule } from './ui/ui-loading-bar/ui-loading-bar.module';

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
    TopicModule.forRoot(),
    UiLoadingBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: httpLink.create({uri: '/graphql'}),
      cache: new InMemoryCache(),
    });
  }
}
